import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import LoginModal from "../../Modals/LoginModal";
import RegisterModal from "../../Modals/RegisterModal";
import { Avatar } from '@mui/material';

const NavLogReg = () => {
    const { user } = useContext(AuthContext);

    return (
        <div>
            {
                user ? <>
                    <Avatar alt="Remy Sharp" src={user.photoURL} />
                </>
                    :
                    <>
                        <div className="flex">
                            <LoginModal></LoginModal>
                            <RegisterModal></RegisterModal>
                        </div>
                    </>
            }

        </div>
    )
}
export default NavLogReg;