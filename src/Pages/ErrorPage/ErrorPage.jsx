import { Link } from "react-router-dom";

const ErrorPage = () =>{
    return (
        <div>
        <div className="flex justify-center pt-[350px] text-red-600">
            <h1 className="text-8xl">Error 404</h1>
        </div>
             <div className="pt-10 flex justify-center">

                <Link to='/'><button className="btn bg-purple-950 text-white px-[100px] hover:bg-purple-800">Go Back Home</button></Link>
             </div>
        </div>
    )
}

export default ErrorPage;