import useProUser from "../../Hooks/useProUser";

const PaymentUsers = () => {
    const [proUser] = useProUser();
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Price Paid</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            proUser.map(user =>
                                <tr>
                                    <th>*</th>
                                    <td className="font-bold">{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>Pro User</td>
                                    <td className="py-4 text-green-500 font-bold text-xl">50$</td>                          
                                </tr>
                            )
                        }

                    </tbody>

                </table>
            </div>
        </div>
    )
}
export default PaymentUsers;