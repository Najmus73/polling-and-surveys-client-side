import useCreatedSurveys from "../Hooks/useCreatedSurveys";
import CreatedSurveyCard from "./CreatedSurveyCard";

const CreatedSurvey = () => {
    const [survey] = useCreatedSurveys()
    return (
        <div>
            <h1 className="text-2xl font-bold text-purple-950 text-center">Surveys That Created By You</h1>
            <div className="pt-[50px] grid grid-cols-3 w-[1200px] mx-auto gap-[50px]">
                {
                    survey.map(userSurvey => <CreatedSurveyCard userSurvey={userSurvey}></CreatedSurveyCard>)
                }
            </div>
        </div>
    )
}
export default CreatedSurvey;