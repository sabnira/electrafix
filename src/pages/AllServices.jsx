import axios from "axios";
import { useEffect, useState } from "react";
import ServiceCard from "../components/ServiceCard";
import { IoSearch } from "react-icons/io5";

const AllServices = () => {

    const [services, setServices] = useState([])
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetchAllServices()
    }, [])

    const fetchAllServices = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/services`)
        setServices(data)
    }

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/service?searchParams=${search}`)
            .then((res) => res.json())
            .then((data) => {
                setServices(data);
            })
    }, [search]);


    return (
        <div className="bg-[#1F2434] py-24">

            <div className="w-10/12 md:w-4/12 mx-auto border mb-16">
                <label className="input text-lg w-full">
                    <IoSearch className="opacity-60 text-xl" />
                    <input
                        onChange={(e) => setSearch(e.target.value)}
                        type="search" name="search" required placeholder="Search" />
                </label>
            </div>

            <div className="w-11/12 mx-auto">

                <h1 className="text-3xl md:text-5xl font-extrabold mb-20 inline-block text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400">
                    All Services
                </h1>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                    {
                        services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllServices;