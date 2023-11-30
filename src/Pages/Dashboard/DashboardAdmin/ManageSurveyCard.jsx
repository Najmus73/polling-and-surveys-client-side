import { MdOutlineSystemUpdateAlt } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";

const ManageSurveyCard = ({ userSurvey }) => {

    return (
        <div className="w-[400px] h-[600px] border border-purple-950 rounded-lg">
            <img className="w-[400px] h-[250px]" src={userSurvey.image}></img>
            <h1 className="text-xl font-bold p-4 h-24">{userSurvey.surveyTitle}</h1>
            <p className="p-4 h-[190px]">{userSurvey.description}</p>
            <div className="flex justify-center gap-20">
                <MdDeleteForever className="text-5xl"/>
            </div>
        </div>
    )
}
export default ManageSurveyCard;

