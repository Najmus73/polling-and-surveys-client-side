import { Outlet } from "react-router-dom";
import NavBar from "../Pages/NavBar/NavBar";
import FooterSection from "../Pages/Footer/Footer";



const Route = () =>{
    return(
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <FooterSection></FooterSection>
        </div>
    )
}
export default Route;