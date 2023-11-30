import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import useProUser from '../Hooks/useProUser';
import Swal from 'sweetalert2';
import axios from 'axios';
import useSubmit from '../Hooks/useSubmit';


function DetailsDesign({ SurveyFind }) {
    const { user } = useContext(AuthContext);
    const [proUser] = useProUser();
    const proUserFind = proUser.find(userPro => userPro.email === user.email)
    const [Submit] = useSubmit();
    const SubmitFind = Submit.find(findSubmit => findSubmit.email === user.email)


    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const Question1 = form.Question1.value;
        const Question2 = form.Question2.value;
        const Question3 = form.Question3.value;
        const email = form.email.value;
        const Comment = form.Comment.value;
        const Vote = form.Vote.value;
        const Like = form.Like.value;
        const Dislike = form.Dislike.value;
        const Submits = {
            Question1,
            Question2,
            Question3,
            email,
            Comment,
            Vote,
            Like,
            Dislike,
            title: SurveyFind.surveyTitle

        }

        if (SubmitFind?.email === user.email) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "You Can't do Twice",
                footer: '<a href="#">Why do I have this issue?</a>'
            });
        } else {
            axios.post('https://polling-and-survey-app-server.vercel.app/submit', Submits)
                .then(res => {
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${SurveyFind.surveyTitle} added to your bid section`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                    window.location.reload(true)
                })

        }
    }
    return (


        <div className="h-[500px] w-[1450px] mx-auto pt-[50px]">
            <form onSubmit={handleSubmit}>
                <div className="flex justify-between pb-[10px]">
                    <div className="flex flex-col">
                        <label>{SurveyFind.Question1}</label>
                        <input className="border border-pink-900 py-[5px] pr-[460px]" type="text" name="Question1" required />
                    </div>
                    <div className="flex flex-col">
                        <label>{SurveyFind.Question2}</label>
                        <input className="border border-pink-900 py-[5px] pr-[460px]" type="text" name='Question2' required />
                    </div>
                </div>

                <div className="flex justify-between pb-[10px]">
                    <div className="flex flex-col">
                        <label>{SurveyFind.Question3}</label>
                        <input className="border px-[44px] border-pink-900 py-[5px] pr-[460px]" type="text" name="Question3" required />
                    </div>
                    <div className="flex flex-col">
                        <label> User Email</label>
                        <input className="border px-[44px] border-pink-900 py-[5px] pr-[460px]" type="text" name="email" defaultValue={user.email} readOnly />
                    </div>
                </div>
                <div className="flex justify-between pb-[10px]">
                    {
                        proUserFind ? <>
                            <div className="flex flex-col">
                                <label>Only Pro User Can Comment</label>
                                <input className="border px-[44px] border-pink-900 py-[5px] pr-[460px]" type="text" name="Comment" required />
                            </div>
                        </> : <><h1 className='text-red-400 font-bold'>Only Pro User Can Comment</h1></>
                    }
                    <div className="flex flex-col">
                        <label> User Vote(If you want to vote then type "VOTE")</label>
                        <input className="border px-[44px] border-pink-900 py-[5px] pr-[460px]" type="text" name="Vote" />
                    </div>
                </div>
                <div className="flex justify-between pb-[10px]">
                    <div className="flex flex-col">
                        <label>User If Like(If you want to vote then type "LIKE")</label>
                        <input className="border px-[44px] border-pink-900 py-[5px] pr-[460px]" type="text" name="Like" />
                    </div>
                    <div className="flex flex-col">
                        <label> User If Dislike(If you want to vote then type "DISLIKE")</label>
                        <input className="border px-[44px] border-pink-900 py-[5px] pr-[460px]" type="text" name="Dislike" />
                    </div>
                </div>

                <div className="pt-[30px]">
                    <input type="submit" value="Click Here Submit" className="btn btn-block bg-purple-950 font-bold hover:bg-purple-700 text-white" />
                </div>
            </form>
           
        </div>


    );
}
export default DetailsDesign;