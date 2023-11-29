import { useContext } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
// import { Helmet } from "react-helmet";

const CreateSurvey = () => {
    const { user } = useContext(AuthContext)
    const { email } = user;
    
    const handleCreateSurvey = e => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const email = form.email.value;
        const surveyTitle = form.surveyTitle.value;
        const category = form.category.value;
        const description = form.description.value;
       
        const NewSurvey = { image, surveyTitle, category, description, email }
        console.log(NewSurvey);

        axios.post('http://localhost:5000/survey', NewSurvey)
        .then(res => {
            if (res.data.insertedId) {
                Swal.fire({
                    position:"top-end",
                    icon: "success",
                    title: `${surveyTitle} added to your survey collection`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        })

}
    return (
        <div>
            {/* <Helmet>
                <meta charSet="utf-8" />
                <title>True | AddJob</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet> */}
            <h1 className="py-[50px] font-bold text-2xl text-purple-950 text-center">Create Survey By Fill Up This Form</h1>
            <div className="h-[500px] w-[1350px] mx-auto pt-[50px]">
                <form onSubmit={handleCreateSurvey}>
                    <div className="flex justify-between pb-[10px]">
                        <div className="flex flex-col">
                            <label>Image</label>
                            <input className="border border-purple-950 py-[5px] pr-[460px]" type="text" name="image" placeholder="Enter Image Url" required />
                        </div>
                        <div className="flex flex-col">
                            <label>Survey Title</label>
                            <input className="border border-purple-950 py-[5px] pr-[460px]" type="text" name="surveyTitle" placeholder="Enter Job Title" required />
                        </div>
                    </div>
                    <div className="flex justify-between pb-[10px]">
                        <div className="flex flex-col">
                            <label>Category</label>
                            <input list='data' className="border border-purple-950 py-[5px] pr-[460px]" type="text" name="category" placeholder="Enter Category" required />
                            <datalist id='data'>
                                <option>Online surveys</option>
                                <option>Telephonic Surveys</option>
                                <option>One-to-One interviews</option>
                            </datalist>
                        </div>
                        <div className="flex flex-col">
                            <label>Email</label>
                            <input className="border border-purple-950 py-[5px] pr-[460px]" type="email" name="email" defaultValue={email} readOnly />
                        </div>

                    </div>
                    <div className="flex justify-between pb-[10px]">
                        <div className="flex flex-col">
                            <label>Description</label>
                            <input className="border border-purple-950 py-[5px] pr-[460px]" type="text" name="description" placeholder="Enter Job Description" required />
                        </div>
                        
                    </div>


                    <div className="pt-[30px]">
                        <input type="submit" value="Create Survey" className="py-[6px] rounded-lg w-full bg-purple-950 font-bold text-white" />
                    </div>
                </form>

            </div>
        </div>
    )
}
export default CreateSurvey;