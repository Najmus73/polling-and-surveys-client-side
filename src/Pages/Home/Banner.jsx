import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Banner = () => {
    useEffect(()=>{
        AOS.init({duration: 2000});
    },[])
    return (
        <div>
            <div className=" lg:w-full lg:h-[600px]" style={{ backgroundImage: `url("https://i.ibb.co/n8z017z/hero-area-bg1.jpg")` }}>
                <div className=" space-y-5  lg:space-y-10 lg:pt-[100px]">
                    <div data-aos="zoom-in" className="flex flex-col text-center">
                        <h1 className="text-white text-3xl lg:text-5xl pb-4 tracking-[4px]">Create Your Own</h1>
                        <h1 className="text-white  text-3xl lg:text-5xl tracking-[4px]">Business With Our Survey Information</h1>
                    </div>
                    <div data-aos="zoom-out">
                        <p className="text-white text-center">Survey is the most powerful to gather information for your business that our web provide most</p>
                    </div>
                    <div data-aos="fade-up" className="flex justify-center gap-6">
                        <Link to='/surveys'><button className="px-5 py-[10px]  text-white border border-white rounded-2xl font-bold hover:bg-white hover:text-purple-950">Explore Surveys</button> </Link>
                    </div>
                </div>

                <div className="w-full h-[600px] bg-purple-950 mt-[-362px] bg-opacity-90">

                </div>

            </div>



        </div>
    )
}
export default Banner;