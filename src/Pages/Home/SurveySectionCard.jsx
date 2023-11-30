import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
const SurveySectionCard = ({ surveys }) => {
    useEffect(()=>{
        AOS.init({duration: 2000});
    },[])
    return (
        <div data-aos="fade-left" className="lg:w-[460px] lg:h-[600px] border border-purple-950 rounded-lg">
            <img className="lg:w-[460px] lg:h-[250px]" src={surveys.image}></img>
            <h1 className="text-xl font-bold p-4 h-24">{surveys.surveyTitle}</h1>
            <p className="p-4 h-[190px]">{surveys.description}</p>
            <div className="px-4">
                <Link to='/surveys'><button className="text-white font-bold bg-purple-950 py-[6px] w-full rounded-lg">Explore Now</button></Link>
            </div>
        </div>
    )
}
export default SurveySectionCard;
