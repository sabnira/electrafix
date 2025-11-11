import { Link, NavLink } from "react-router-dom";
import logo from '../assets/logo.png'
import { CgProfile } from "react-icons/cg";

const Navbar = () => {

    const links = (
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/about">About us</NavLink></li>

            <li>
                <details>
                    <summary>Dashboard</summary>
                    <ul className="menu menu-dropdown bg-base-100 rounded-box p-2 shadow w-52">
                        <li><Link to='/add-service'>Add Service</Link></li>
                        <li><Link to='/manage-service'>Manage Service</Link></li>
                        <li><Link to='/booked-services'>Booked-Services</Link></li>
                        <li><Link to='/service-to-do'>Service-To-Do</Link></li>
                    </ul>
                </details>
            </li>

        </>
    );


    return (
        <div className="navbar w-11/12 mx-auto bg-base-100">
            <div className="navbar-start">

                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>

                <img className='w-auto h-14' src={logo} alt="" />

            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg">
                    {links}
                </ul>
            </div>

            <div className="navbar-end flex gap-4">

                <div className="w-5 h-5 md:w-10 md:h-10 rounded-3xl overflow-hidden">
                 
                    <CgProfile className="w-full h-full text-slate-500" />
                  
                </div>

                <NavLink to="/login" className="btn  text-white bg-[#FF7F00]">Login</NavLink>

                <NavLink to="/register" className="btn text-white bg-[#FF7F00]">Register</NavLink>
            </div>
        </div>
    );
};

export default Navbar;