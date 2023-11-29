import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Avatar } from '@mui/material';
import { Link, NavLink } from "react-router-dom";
import useUsers from "../Hooks/useUsers";
import { SiProcessingfoundation } from "react-icons/si";

const NavLogReg = () => {
    const { user } = useContext(AuthContext);
    const [users]= useUsers();
    // const findUser = users.find(userFind=> userFind.email === user.email)  
    return (
        <div className="flex gap-3 items-center font-bold">        
                <Link to='/proUser'><div className="flex items-center gap-1"><div><SiProcessingfoundation /></div>Pro User</div></Link>
            <div>
                {
                    user ? <>
                        <NavLink to='/dashboard'><Avatar alt="Remy Sharp" src={user?.photoURL} /></NavLink>
                    </>
                        :
                        <>
                            <div className="flex gap-2 items-center">
                                <NavLink to="/login"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-white border-b-4 border-white font-bold" : "font-bold text-white"}>LOGIN
                                </NavLink>

                                <NavLink to="/register"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-white border-b-4 border-white font-bold" : "font-bold text-white"}>REGISTER
                                </NavLink>
                            </div>
                        </>
                }
            </div>

        </div>
    )
}
export default NavLogReg;