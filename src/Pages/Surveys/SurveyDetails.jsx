import { useLoaderData, useParams } from "react-router-dom";
import DetailsDesign from "./DetailsDesign";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useSubmit from "../Hooks/useSubmit";



const SurveyDetails = () => {
    const { user, loading } = useContext(AuthContext)
    const survey = useLoaderData();
    const { _id } = useParams();
    const SurveyFind = survey.find(findSurvey => findSurvey._id === _id)
    const [Submit] = useSubmit();
    console.log(Submit);

    if (loading) {
        return <Spinner aria-label="Default status example" />;
    }

    if (user) {
        return (
            <div className="w-[1440px] mx-auto pt-[188px] pb-[88px]">
                <div className="">
                    <div><img className="w-full h-[420px]" src={SurveyFind.image} alt="" />
                        <h1 className="py-10 font-bold text-2xl text-purple-950">{SurveyFind.surveyTitle}</h1>
                    </div>
                    <div><DetailsDesign SurveyFind={SurveyFind}></DetailsDesign></div>
                </div>
                <h1 className="py-[25px] font-bold text-center text-2xl">Comment By Pro User</h1>
                {
                    Submit.map(submit =>
                        <>
                            <div className="chat chat-start">
                                <div className="chat-header">
                                    Obi-Wan Kenobi
                                    <time className="text-xs opacity-50">2 hours ago</time>
                                </div>
                                <div className="chat-bubble">{submit.Comment}</div>
                                <div className="chat-footer opacity-50">
                                    Seen
                                </div>
                            </div>
                        </>
                    )
                }

            </div>
        )
    }

}

export default SurveyDetails;