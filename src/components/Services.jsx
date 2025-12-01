import axios from "axios";
import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";



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

    <div className="bg-[#1F2434] py-24">
      <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-10'>
        {
          services.slice(0, 6).map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
        }
      </div>
    </div>
  );
};

export default Services;
