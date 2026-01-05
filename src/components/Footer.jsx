import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer className="bg-[#05060f] text-gray-300 pt-16">
      
      {/* Neon divider */}
      <div className="h-0.5 w-full bg-linear-to-r from-cyan-500 via-fuchsia-500 to-purple-500 shadow-[0_0_15px_#22d3ee]"></div>

      <div className="footer p-10 max-w-7xl mx-auto grid-cols-1 md:grid-cols-4 gap-8">

        
        <aside className="md:mx-auto">
          <img className='w-auto h-6 md:h-8' src={logo} alt="" />
          <p className="mt-3 text-sm leading-relaxed">
            Reliable electrical and repair services with a modern touch.
            Powering your home & business safely.
          </p>
        </aside>

        
        <nav  className="md:mx-auto">
          <h6 className="footer-title text-cyan-400">Services</h6>
          <a className="link link-hover">Electrical Repair</a>
          <a className="link link-hover">AC Maintenance</a>
          <a className="link link-hover">Wiring & Installation</a>
          <a className="link link-hover">Emergency Support</a>
        </nav>

       
        <nav className="md:mx-auto">
          <h6 className="footer-title text-fuchsia-400">Company</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Our Team</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Contact</a>
        </nav>

       
        <nav  className="md:mx-auto">
          <h6 className="footer-title text-purple-400">Connect</h6>
          <div className="flex gap-4 mt-3">
            <a className="btn btn-circle btn-outline text-cyan-400 hover:shadow-[0_0_15px_#22d3ee]">
              <FaFacebookF />
            </a>
            <a className="btn btn-circle btn-outline text-fuchsia-400 hover:shadow-[0_0_15px_#d946ef]">
              <FaInstagram />
            </a>
            <a className="btn btn-circle btn-outline text-sky-400 hover:shadow-[0_0_15px_#38bdf8]">
              <FaTwitter />
            </a>
            <a className="btn btn-circle btn-outline text-purple-400 hover:shadow-[0_0_15px_#a855f7]">
              <FaLinkedinIn />
            </a>
          </div>
        </nav>
      </div>

     
      <div className="text-center py-6 text-sm border-t border-white/10">
        © {new Date().getFullYear()}{" "}
        <span className="text-cyan-400 font-semibold">ElectraFix</span>.  
        All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
