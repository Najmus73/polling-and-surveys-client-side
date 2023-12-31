import useCreatedSurveys from "../Hooks/useCreatedSurveys";
import SurveySectionCard from "./SurveySectionCard";


const SurveySection = () => {
    const [survey] = useCreatedSurveys();

    return (
        <div>
        <div className="py-[50px] lg:w-[1440px] mx-auto">
            <div><h1 className="flex justify-center font-bold text-2xl text-purple-950">Featured Surveys</h1></div>
            <h1 className="border-b-4 pt-[7px] lg:w-[245px] lg:ml-[600px] border-purple-950"></h1>
            <div className="pt-[60px] grid grid-cols-1 lg:grid lg:grid-cols-3 gap-[30px]">
                {
                    survey.map(surveys => <SurveySectionCard surveys={surveys}></SurveySectionCard>)
                }
            </div>
        </div>
        </div>
    )
}
export default SurveySection;