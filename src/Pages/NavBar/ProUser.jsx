import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import useUsers from "../Hooks/useUsers";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const ProUser = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
    const { user } = useContext(AuthContext);
    const [users] = useUsers();
    const findUser = users.find(userFind => userFind.email === user.email)
    return (
        <div>
            {
                findUser ? <>
                    <div className="pt-[288px] pb-[200px] w-[1200px] mx-auto">
                        <div>
                            <h1 className="pb-[10px] font-extrabold text-2xl text-center text-purple-950">For Pro User You Have To Pay 50 $</h1>
                            <h1 className="pb-[50px] font-extrabold text-2xl text-center text-purple-950">If You Are Ok With This Price Then Go For It !!!</h1>
                            <Elements stripe={stripePromise}>
                                <CheckoutForm></CheckoutForm>
                            </Elements>
                        </div>
                    </div>
                </>
                    : <>
                        <div className="pt-[280px] pb-[380px]"><h1 className="font-bold flex justify-center text-5xl text-purple-950 pb-[30px]">Just User Can Pay For Pro User</h1>
                            <h1 className="font-bold flex justify-center text-5xl text-purple-950">If You have User Account Then Log In with those Accounts</h1>
                        </div>

                    </>
            }
        </div>
    )
}
export default ProUser;