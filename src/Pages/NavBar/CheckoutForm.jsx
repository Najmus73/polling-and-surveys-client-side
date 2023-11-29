import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";
import swal from "sweetalert";
import useUsers from "../Hooks/useUsers";


const CheckoutForm = () => {
  const { user } = useContext(AuthContext);
  const [users] = useUsers();
  const findUser = users.find(userFind => userFind.email === user.email)
  console.log(findUser);
  const [error, setError] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [transactionId, setTransactionId] = useState('')
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const price = 50

  useEffect(() => {
    axiosSecure.post('/create-payment-intent', { price: price })
      .then(res => {
        setClientSecret(res.data.clientSecret);
      })
  }, [axiosSecure, price])

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);
      setError(error.message);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      setError('');
    }

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          email: user?.email || 'anonymous',
          name: user?.displayName || 'anonymous'
        }
      }
    })
    if (confirmError) {
      console.log('confirm error');
    }
    else {
      console.log(paymentIntent);
      if (paymentIntent.status === 'succeeded') {
        console.log('transaction id', paymentIntent.id);
        setTransactionId(paymentIntent.id)
      }
    }
  };

  if (transactionId) {
    const proUserInfo = {
      name: findUser.name,
      email: findUser.email,
    }
    axios.post('http://localhost:5000/proUser', proUserInfo)
      .then(res => {
        if (res.data.insertedId) {
          swal("Good job!", "Successfully Payed The Money !!!", "success")
        }
      })

    fetch(`http://localhost:5000/users/${findUser._id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        swal("Good job!", "User Successfully Moved To Pro User", "success")
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <div className="pt-[50px]">
        <button className="btn px-10 bg-purple-950 text-white" type="submit" disabled={!stripe || !clientSecret}>
          Pay
        </button>
      </div>
      <p className="text-red-600">{error}</p>
      {transactionId && <p className="text-green-600">Your Transaction id: {transactionId}</p>}
    </form>
  );
};



export default CheckoutForm;