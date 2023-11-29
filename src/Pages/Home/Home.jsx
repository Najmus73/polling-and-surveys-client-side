import Banner from "./Banner";
import FAQ from "./FAQ";
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
            <FAQ></FAQ>         
        </div>
    )
}
export default Home;