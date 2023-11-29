import AOS from 'aos';
import 'aos/dist/aos.css';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useUsers from '../Hooks/useUsers';
import useProUser from '../Hooks/useProUser';
import { AuthContext } from '../AuthProvider/AuthProvider';
const SurveySectionCard1 = ({ surveys }) => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    const { user } = useContext(AuthContext);
    
    const [users] = useUsers();
    const [proUser] = useProUser();
    const usersFind = users.find(FindUser => FindUser.email === user.email)
    const proUserFind = proUser.find(userPro => userPro.email === user.email)
 
    return (
        <div data-aos="fade-left" className="w-[450px] h-[600px] border border-purple-950 rounded-lg">
            <img className="w-[450px] h-[250px]" src={surveys.image}></img>
            <h1 className="text-xl font-bold p-4 h-24">{surveys.surveyTitle}</h1>
            <p className="p-4 h-[190px]">{surveys.description}</p>
            {
                usersFind || proUserFind ? <>
                    <div className="px-4">
                        <Link to={`/surveyDetail/${surveys._id}`}><button className="text-white font-bold bg-purple-950 py-[6px] w-full rounded-lg">Explore Now</button></Link>
                    </div>
                </> : 
                <>
                      <div>
                         <h1 className='text-center font-bold text-red-600'>Only User and Pro User can participate</h1>
                      </div>
                </>
            }
        </div>
    )
}
export default SurveySectionCard1;

