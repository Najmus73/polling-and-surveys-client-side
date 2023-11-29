import { useContext } from "react";

import CreatedSurveyCard from "./CreatedSurveyCard";
import useCreatedSurveys from "../../../Hooks/useCreatedSurveys";
import { AuthContext } from "../../../AuthProvider/AuthProvider";


const CreatedSurvey = () => {
    const [survey] = useCreatedSurveys()
    const {user}=useContext(AuthContext);
    const surveyFind = survey.filter(surveys=> surveys.email === user.email)
    return (
        <div>
            <h1 className="text-2xl font-bold text-purple-950 text-center">Surveys That Created By You</h1>
            <div className="pt-[50px] grid grid-cols-3 w-[1200px] mx-auto gap-[50px]">
                {
                    surveyFind.map(userSurvey => <CreatedSurveyCard userSurvey={userSurvey}></CreatedSurveyCard>)
                }
            </div>
        </div>
    )
}
export default CreatedSurvey;