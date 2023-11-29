import useCreatedSurveys from "../Hooks/useCreatedSurveys";
import SurveySectionCard1 from "./SurveySectionCard1";

const Surveys = () => {
    const [survey] = useCreatedSurveys();

    return (
        <div className="pt-[88px]">
            <h1 className="font-bold text-2xl text-center text-purple-950 py-[25px]">All Surveys</h1>
            <div className="pt-[50px] pb-[50px] grid grid-cols-3 w-[1440px] mx-auto gap-[44px]">
                {
                    survey.map(surveys => <SurveySectionCard1 surveys={surveys}></SurveySectionCard1>)
                }
            </div>
        </div>
    )
}
export default Surveys;

