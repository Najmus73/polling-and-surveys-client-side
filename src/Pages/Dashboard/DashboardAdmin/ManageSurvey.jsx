import { useContext } from "react";
import useCreatedSurveys from "../../Hooks/useCreatedSurveys";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import ManageSurveyCard from "./ManageSurveyCard";





const ManageSurvey = () => {
    const [survey] = useCreatedSurveys()
    const {user}= useContext(AuthContext);
    const surveyFind = survey.filter(surveys=> surveys.email === user.email)
    return (
        <div>
            <h1 className="text-2xl font-bold text-purple-950 text-center">Surveys That Created By You</h1>
            <div className="pt-[50px] grid grid-cols-3 w-[1200px] mx-auto gap-[50px]">
                {
                    surveyFind.map(userSurvey => <ManageSurveyCard userSurvey={userSurvey}></ManageSurveyCard>)
                }
            </div>
        </div>
    )
}
export default ManageSurvey;