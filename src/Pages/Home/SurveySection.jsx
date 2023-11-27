import useCreatedSurveys from "../Hooks/useCreatedSurveys";
import SurveySectionCard from "./SurveySectionCard";


const SurveySection = () => {
    const [survey] = useCreatedSurveys();

    return (
        <div className="py-[50px] w-[1440px] mx-auto">
            <div><h1 className="flex justify-center font-bold text-2xl text-purple-950">Featured Surveys</h1></div>
            <h1 className="border-b-4 pt-[7px] w-[245px] ml-[600px] border-purple-950"></h1>
            <div className="pt-[60px] grid grid-cols-3 gap-[30px]">
                {
                    survey.map(surveys => <SurveySectionCard surveys={surveys}></SurveySectionCard>)
                }
            </div>
        </div>
    )
}
export default SurveySection;