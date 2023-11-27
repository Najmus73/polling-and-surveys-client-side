import Banner from "./Banner";
import SearchBox from "./SearchBox";
import SurveySection from "./SurveySection";
import TestimonialSlider from "./TestimonialSlider";


const Home = () =>{
    return(
        <div className="mt-[88px]">
            <Banner></Banner>
            <SearchBox></SearchBox>
            <SurveySection></SurveySection>
            <TestimonialSlider></TestimonialSlider>         
        </div>
    )
}
export default Home;