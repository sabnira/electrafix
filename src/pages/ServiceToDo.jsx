import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../provider/AuthContext";
import toast from "react-hot-toast";
import useAxiosSecure from "../hooks/useAxiosSecure";


const ServiceToDo = () => {

    const axiosSecure = useAxiosSecure()
    const { user } = useContext(AuthContext);
    const [MyBookedServices, setMyBookedServices] = useState([]);


    useEffect(() => {
        fetchMyBookedServices()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user])

    const fetchMyBookedServices = async () => {
        const { data } = await axiosSecure.get(`/myServices/${user?.email}`)
        setMyBookedServices(data)
    }

    const handleStatusChange = async (id, prevStatus, status) => {

        if (prevStatus === status)
            return console.log('Not Allowed')

        try {
            const { data } = await axios.patch(`${import.meta.env.VITE_API_URL}/status-update/${id}`, { status })

            console.log(data)
            toast.success(`Status Changed To ${status}`)
            //refresh ui
            fetchMyBookedServices()
        } catch (err) {
            console.log(err);
            toast.error(err.message)
        }

        // console.table({id, prevStatus, status});
    }

    return (
        <div className="py-16 p-6 min-h-screen bg-linear-to-br from-gray-700 via-black to-gray-800 text-white ">

            <h2 className="text-3xl font-bold text-center ">Update Status of your Services</h2>
            <p className="text-center mt-2 mb-8">Manage the status of your services, update status, and ensure timely completion with ease</p>

            <div className="w-11/12 mx-auto bg-white/10 p-8 border border-gray-700">
                {MyBookedServices.length === 0 ? (
                    <p className="text-gray-400 text-center text-2xl">
                        No booked services available for you.
                    </p>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead className="bg-gray-800 text-white">
                                <tr>
                                    <th className="px-4 py-2">Image</th>
                                    <th className="px-4 py-2">Service Name</th>
                                    <th className="px-4 py-2">Client Info.</th>
                                    <th className="px-4 py-2">Price</th>
                                    <th className="px-4 py-2">Date</th>
                                    <th className="px-4 py-2">Instruction</th>
                                    <th className="px-4 py-2">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {MyBookedServices.map((service) => (
                                    <tr key={service._id} className="hover:bg-gray-700">
                                        <td className="px-4 py-4">
                                            <img
                                                src={service.serviceImage}
                                                alt={service.serviceName}
                                                className="w-20 h-16 object-cover rounded"
                                            />
                                        </td>
                                        <td className="px-4 py-2">{service.serviceName}</td>
                                        <td className="px-4 py-2">{service.userName} <br /> {service.userEmail}</td>
                                        <td className="px-4 py-2 text-green-400">${service.price}</td>
                                        <td className="px-4 py-2">{service.serviceTakingDate}</td>
                                        <td className="px-4 py-2 text-gray-300">
                                            {service.specialInstruction || "—"}
                                        </td>

                                        <td className="px-4 py-2 font-semibold">
                                            <select className="select select-info bg-black"

                                                value={service.serviceStatus}
                                                
                                                onChange={(e) =>
                                                    handleStatusChange(
                                                        service._id,
                                                        service.serviceStatus,
                                                        e.target.value
                                                    )
                                                }
                                            >

                                                <option value="pending" className="hover:bg-gray-800">pending</option>

                                                <option value="working" className="hover:bg-gray-800">working</option>

                                                <option value="completed" className="hover:bg-gray-800">completed</option>
                                            </select>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ServiceToDo;
