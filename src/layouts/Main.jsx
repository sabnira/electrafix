import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Main = () => {

    const location = useLocation()
    const isHome = location.pathname === "/"

    return (
        <div >

            {!isHome && (
                <div className="bg-[#0B0F1A]">
                    <Navbar />
                </div>
            )}


            <div className='min-h-[calc(100vh-306px)]'>
                <Outlet />
            </div>


            <Footer />
        </div>
    );
};

export default Main;