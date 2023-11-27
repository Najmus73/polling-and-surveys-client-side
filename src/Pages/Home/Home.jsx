import Banner from "./Banner";
import SearchBox from "./SearchBox";
import SurveySection from "./SurveySection";

const Home = () =>{
    return(
        <div className="mt-[88px]">
            <Banner></Banner>
            <SearchBox></SearchBox>
            <SurveySection></SurveySection>
        </div>
    )
}
export default Home;