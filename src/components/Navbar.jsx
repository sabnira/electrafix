import { Link, NavLink } from "react-router-dom";
import logo from '../assets/logo.png'
import { CgProfile } from "react-icons/cg";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthContext";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const links = (
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/about">About us</NavLink></li>

            <li>
                <details>
                    <summary>Dashboard</summary>
                    <ul className="menu menu-dropdown text-black z-1 rounded-box p-2 shadow w-52">
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
        <div className="navbar w-11/12 mx-auto py-4">
            <div className="navbar-start">

                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-200 text-black rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>

                <img className='w-auto h-6 md:h-10' src={logo} alt="" />
                
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg">
                    {links}
                </ul>
            </div>

            <div className="navbar-end flex gap-4">

                {
                    user ?
                        <>
                            <div className="tooltip tooltip-left" data-tip={user && user?.displayName}>

                                <div className="w-5 h-5 md:w-10 md:h-10 rounded-3xl overflow-hidden ring-2 ring-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.8)]">
                                    {user?.photoURL ? (
                                        <img
                                            referrerPolicy='no-referrer'
                                            className="w-full h-full object-cover"
                                            src={user.photoURL}
                                            alt="User Profile"
                                        />
                                    ) : (
                                        <CgProfile className="w-full h-full" />
                                    )}
                                </div>
                            </div>

                            <button onClick={logOut} className="px-6 py-3 bg-linear-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 transition-all rounded-lg font-semibold shadow-lg text-white">
                                Logout
                            </button>
                        </>
                        :
                        <>
                            <div className="w-5 h-5 md:w-10 md:h-10 rounded-3xl overflow-hidden">

                                <CgProfile className="w-full h-full" />

                            </div>
                            <NavLink to="/login" className="px-6 py-3 bg-linear-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 transition-all rounded-lg font-semibold shadow-lg text-white">Login</NavLink>
                        </>
                }

            </div>
        </div>
    );
};

export default Navbar;