import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Main = () => {

    const location = useLocation()
    const isHome = location.pathname === "/"

    return (
        <div>
        
            {!isHome && <Navbar />}

            <div className='min-h-[calc(100vh-306px)]'>
                <Outlet />
            </div>

            <Footer />
        </div>
    );
};

export default Main;