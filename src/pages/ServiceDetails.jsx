import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";

const ServiceDetails = () => {

    const { id } = useParams()
    const [service, setService] = useState({})

    useEffect(() => {
        fetchService()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    const fetchService = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/service/${id}`)
        setService(data)
    }

    const { _id, image, serviceName, price, description, serviceArea, serviceProvider } = service || {};


    return (
        <div className="min-h-screen bg-linear-to-br from-gray-700 via-black to-gray-800 text-white flex flex-col items-center py-12 px-4">

            <div className="w-full max-w-5xl relative rounded-xl overflow-hidden shadow-lg">
                <img src={image} alt={serviceName} className="w-full h-80 object-cover" />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center"></div>
            </div>

            <div className="mt-10 w-full max-w-4xl bg-white/10  rounded-xl shadow-xl p-14 border border-gray-700 space-y-8">

                <h2 className="text-3xl font-bold">{serviceName}</h2>
                <p className="text-gray-200"><span className="text-xl">Description: </span>{description}</p>

                <div className="inline-block px-6 py-2 rounded-full bg-gray-200 text-black font-bold shadow-lg mr-4">
                    $ {price}
                </div>

                {serviceArea && (
                    <div className="inline-block px-6 py-2 rounded-full bg-linear-to-r from-indigo-600 to-blue-700 font-medium shadow-md">
                        <div className="flex items-center gap-2"><FaLocationDot /> {serviceArea}</div>
                    </div>
                )}

                {serviceProvider && (
                    <div className="flex items-center gap-3">

                        <p className="text-xl">Service Provider: </p>
                        <span className="text-gray-200 text-lg font-medium">
                            {serviceProvider.name}
                        </span>
                        <img
                            referrerPolicy="no-referrer"
                            src={serviceProvider.photo}
                            alt={serviceProvider.name}
                            className="w-12 h-12 rounded-full object-cover border border-gray-600"
                        />

                    </div>
                )}

                <button className="px-6 py-3 rounded-lg bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg font-semibold">
                    Book Service
                </button>

            </div>
        </div>
    );
};

export default ServiceDetails;