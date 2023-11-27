import Divider from '@mui/material-next/Divider';
import { NavLink, Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import useSurveyor from '../Hooks/useSurveyor';
import { IoIosCreate } from "react-icons/io";
import { FcSurvey } from "react-icons/fc";
import useUsers from '../Hooks/useUsers';
import useAdmin from '../Hooks/useAdmin';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const [surveyor] = useSurveyor();
    const [users] = useUsers();
    const [admin] = useAdmin();
    const adminFind = admin.find(adminUser => adminUser.email === user.email)
    const surveyorFind = surveyor.find(surveyorUser => surveyorUser.email === user.email)
    const usersFind = users.find(user => user.email === user.email)

    return (
        <div className="flex">
            <div className="w-64 min-h-screen " style={{ backgroundColor: '#612875' }}>
                <ul className="menu p-4 text-white">
                    {

                        adminFind ? <>
                            <li><NavLink to="/dashboard/adminHome">Admin Home</NavLink></li>
                            <li><NavLink to="/dashboard/addItems">Add Items</NavLink></li>
                            <li><NavLink to="/dashboard/manageItems">Manage Items</NavLink></li>
                            <li><NavLink to="/dashboard/manageBookings">Manage Bookings</NavLink></li>
                            <li><NavLink to="/dashboard/allUsers">All Users</NavLink></li>
                        </>
                            :
                            surveyorFind ? <>
                                <li><NavLink to="/dashboard/createSurvey"><div className='flex items-center gap-1'><IoIosCreate /><h1 className='font-bold'>Create Survey</h1></div></NavLink></li>
                                <li><NavLink to="/dashboard/createdSurvey"><div className='flex items-center gap-1'><FcSurvey className='text-lg' /><h1 className='font-bold'>Your Surveys</h1></div></NavLink></li>
                            </>
                                :
                                usersFind ?
                                    <>
                                        <li><NavLink to="/dashboard/userHome">User Home</NavLink></li>
                                        <li><NavLink to="/dashboard/bid">My Bids</NavLink></li>
                                        <li><NavLink to="/dashboard/reservation">Reservation</NavLink></li>
                                    </>
                                    :
                                    <>
                                    </>
                    }
                    <div className='py-[10px]'><Divider><h1 className='font-bold'>OR</h1></Divider></div>
                    <li><NavLink to="/"><div className='flex items-center gap-2'><FaHome />Home</div></NavLink></li>
                </ul>
            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    )
}

export default Dashboard;