import { Link } from "react-router-dom";


const ServiceCard = ({ service }) => {
    const { _id, image, serviceName, price, description, serviceProvider } = service || {};

    return (
        <div className="bg-white/90 rounded-xl shadow-md overflow-hidden  transition-transform duration-300 hover:scale-105">

           
            <div className="w-full h-52">
                <img
                    src={image}
                    alt={serviceName}
                    className="w-full h-full object-cover "
                />
            </div>

           
            <div className="p-6 space-y-4">
                
                <h2 className="text-xl font-bold text-gray-900 tracking-tight">
                    {serviceName}
                </h2>

                <p className="text-gray-600 text-base leading-relaxed">
                    {description?.slice(0, 90)}
                    {description?.length > 90 && "..."}
                </p>

                <div className="border-b border-gray-400"></div>

                <div className="flex justify-between text-center">
                   
                    {serviceProvider && (
                        <div className="flex items-center gap-3">
                            <img
                                referrerPolicy="no-referrer"
                                src={serviceProvider.photo}
                                alt={serviceProvider.name}
                                className="w-10 h-10 rounded-full object-cover border border-black"
                            />
                            <span className="text-gray-700 text-sm font-medium">
                                {serviceProvider.name}
                            </span>
                        </div>
                    )}

    
                    <span className="bg-gray-200 font-bold px-6 rounded-lg  flex items-center">
                        $ {price}
                    </span>
                </div>

                <Link to={`/service/${_id}`}><button className="w-full  py-2 text-white text-md font-bold bg-linear-to-r from-blue-700  to-purple-700 hover:from-purple-800 hover:to-blue-800 transition-all rounded-lg shadow-lg">
                    View Details
                </button></Link>
            </div>
        </div>

    );
};

export default ServiceCard;




