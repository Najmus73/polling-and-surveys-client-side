import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Avatar } from '@mui/material';
import { NavLink } from "react-router-dom";

const NavLogReg = () => {
    const { user } = useContext(AuthContext);
    
    return (
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
    )
}
export default NavLogReg;