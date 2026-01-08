import axios from "axios";
import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { NavLink } from "react-router-dom";


const Services = () => {

  const [services, setServices] = useState([])

  useEffect(() => {
    fetchAllServices()
  }, [])

  const fetchAllServices = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/services`)
    setServices(data)
  }

  console.log(services);

  return (

    <div className="bg-[#1F2434] py-28">

      <div className="w-11/12 mx-auto">

        <h1 className="text-3xl md:text-5xl font-extrabold mb-20 inline-block text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400">
          Popular Services
        </h1>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
          {
            services.slice(0, 6).map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
          }
        </div>

         <div className='text-center mt-10'>
                <NavLink to="/services" className="btn px-20 mx-auto shadow-none">View All</NavLink>
          </div>
      </div>
    </div>
  );
};

export default Services;
