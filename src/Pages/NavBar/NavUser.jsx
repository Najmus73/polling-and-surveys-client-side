import { useContext } from "react";
import swal from 'sweetalert';
import { AuthContext } from "../AuthProvider/AuthProvider";
import { NavLink } from "react-router-dom";
import useSurveyor from "../Hooks/useSurveyor";


const NavUser = () => {
    const { user, logOut } = useContext(AuthContext);
    const [surveyor] = useSurveyor();
    // const surveyorUser = surveyor.find(user=>user.email === user.email)
    // console.log(surveyorUser);
    const handleSignOut = () => {
        logOut()
            .then(() => {
                if (user) {
                    swal("Good job!", "Successfully Sign Out", "success")
                }
            })
            .catch(err => {
                swal("error", `${err.message}`, "error");
            })
    }
    return (
        <div>
            {
                user ? <>
                    <div className="flex items-center gap-5">
                        <div>
                            <NavLink to='/dashboard'><h1 className="font-bold">Dashboard</h1></NavLink>
                        </div>

                        <div>
                            <span className="text-white font-bold uppercase">{

                                user.displayName ? <>{user.displayName}</> : <>{user.email}</>

                            }</span>
                        </div>
                        
                        <button onClick={handleSignOut} className="rounded-md px-3 py-1 font-bold border bg-white text-purple-950 border-purple-900 hover:bg-purple-950 hover:text-white">Log Out</button>
                    </div>
                </>
                    :
                    ""
            }

        </div>
    )
}
export default NavUser;