import swal from "sweetalert";
import useAdmin from "../../Hooks/useAdmin";
import useSurveyor from "../../Hooks/useSurveyor";
import useUsers from "../../Hooks/useUsers";
import axios from "axios";
import useProUser from "../../Hooks/useProUser";


const ManageUsers = () => {
    const [surveyor] = useSurveyor();
    const [users] = useUsers();
    const [admin] = useAdmin();
    const [proUser] = useProUser();

    const handleSurveyorRole = (surveyorUser) => {
                const users = {
                    name: surveyorUser.name,
                    email: surveyorUser.email
               }
               axios.post('http://localhost:5000/admin', users)
               .then(res => {               
                       swal("Good job!", "Successfully Changed Role", "success") 
                       window.location.reload(true)                                  
               })  

               fetch(`http://localhost:5000/surveyor/${surveyorUser._id}`,{
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {       
                                       
                })
        
    }
    const handleUserRole = (user) => {
                const users = {
                    name: user.name,
                    email: user.email
               }
               axios.post('http://localhost:5000/admin', users)
               .then(res => {               
                       swal("Good job!", "Successfully Changed Role", "success") 
                       window.location.reload(true)                                  
               })  

               fetch(`http://localhost:5000/users/${user._id}`,{
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {       
                                       
                })
        
    }
    const handleProUser = (proUserID) => {
                const users = {
                    name: proUserID.name,
                    email: proUserID.email
               }
               axios.post('http://localhost:5000/admin', users)
               .then(res => {               
                       swal("Good job!", "Successfully Changed Role", "success") 
                       window.location.reload(true)                                  
               })  

               fetch(`http://localhost:5000/proUser/${proUserID._id}`,{
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {       
                                       
                })
        
    }
    return (
        <div className="w-[1200px] overflow-x-auto">
            <table className="table table-lg">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        admin.map(admin =>
                            <tr>
                                <th>*</th>
                                <td className="font-bold uppercase">{admin.name}</td>
                                <td>{admin.email}</td>
                                <td className="font-bold uppercase text-green-400">Admin</td>
                                <td><h1 className="text-green-400 font-bold">Not Editable</h1></td>
                            </tr>
                        )
                    }
                    {
                        surveyor.map(surveyorUser =>
                            <tr>
                                <th>*</th>
                                <td className="font-bold uppercase">{surveyorUser.name}</td>
                                <td>{surveyorUser.email}</td>
                                <td className="font-bold uppercase text-yellow-400">Surveyor</td>
                                <td><button onClick={()=>handleSurveyorRole(surveyorUser)} className="btn bg-yellow-300 text-white">Edit Role</button></td>
                            </tr>
                        )
                    }
                    {
                        proUser.map(proUserID =>
                            <tr>
                                <th>*</th>
                                <td className="font-bold uppercase">{proUserID.name}</td>
                                <td>{proUserID.email}</td>
                                <td className="font-bold uppercase text-purple-950">Pro User</td>
                                <td><button onClick={()=>handleProUser(proUserID)} className="btn bg-purple-950 text-white">Edit Role</button></td>
                            </tr>
                        )
                    }
                    {
                            users.map(user =>
                                <tr>
                                    <th>*</th>
                                    <td className="font-bold uppercase">{user.name}</td>
                                    <td>{user.email}</td>
                                    <td className="font-bold uppercase text-orange-400">User</td>
                                    <td><button onClick={()=>handleUserRole(user)} className="btn bg-orange-500 text-white">Edit Role</button></td>
                                </tr>
                            )
                    }
                </tbody>

            </table>
        </div>
    )
}
export default ManageUsers;