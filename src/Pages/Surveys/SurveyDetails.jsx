import { useParams } from "react-router-dom";
import useCreatedSurveys from "../Hooks/useCreatedSurveys";
import DetailsDesign from "./DetailsDesign";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Spinner } from "flowbite-react";

const SurveyDetails = () =>{
    const  {user,loading} = useContext(AuthContext)
    const [survey] = useCreatedSurveys();
    const { _id } = useParams();
    const find = survey.find(findSurvey => findSurvey._id == _id)
    
    if(loading){
        return <Spinner aria-label="Default status example" />;
    }
    
    if(user){
        return(
            <div className="w-[1440px] mx-auto pt-[188px] pb-[88px]">
                 <div className=" flex">
                    <div><img className="w-[700px] h-[420px]" src={find.image} alt="" /></div>
                    <div><DetailsDesign find={find}></DetailsDesign></div>
                 </div>
            </div>
        )
    }
    
   
}

export default SurveyDetails;