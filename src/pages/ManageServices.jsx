import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthContext";
import axios from "axios";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";

const ManageServices = () => {

    const axiosSecure = useAxiosSecure()
    const { user } = useContext(AuthContext);
    const [myAddServices, setMyAddServices] = useState([]);


    useEffect(() => {
        fetchMyAddServices()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user])

    const fetchMyAddServices = async () => {
        const { data } = await axiosSecure.get(`/myAddServices/${user?.email}`)
        setMyAddServices(data)
    }

    //delete functionality
    const handleDelete = async id => {
        try {
            const { data } = await axios.delete(`${import.meta.env.VITE_API_URL}/myAddServices/${id}`)
            // console.log(data);
            toast.success('Data Deleted Successfully!!!')
            fetchMyAddServices()
        } catch (err) {
            // console.log(err);
            toast.error(err.message)
        }
    }

    const modernDelete = id => {
        toast(
            (t) => (
                <div className='flex gap-3 items-center'>

                    <div><p>Are you <b>sure?</b></p></div>

                    <div>
                        <button
                            className='bg-red-400 text-white px-3 py-1 rounded-md mr-2'
                            onClick={() => {
                                toast.dismiss(t.id)
                                handleDelete(id)
                            }}>Delete</button>

                        <button
                            className='bg-green-400 text-white px-3 py-1 rounded-md'
                            onClick={() => toast.dismiss(t.id)}>Cancel</button>
                    </div>

                </div>
            )
        )
    }

    return (
        <div className="py-16 p-6 min-h-screen bg-linear-to-br from-gray-700 via-black to-gray-800 text-white ">

            <h2 className="text-3xl font-bold text-center ">Manage Your Services</h2>
            <p className="text-center mt-2 mb-8">View, edit, and delete the services you've added. Keep your offerings up-to-date and organized.</p>

            <div className="w-11/12 mx-auto bg-white/10 p-8 border border-gray-700">
                {myAddServices.length === 0 ? (
                    <p className="text-gray-400 text-center text-2xl">
                        No services available
                    </p>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead className="bg-gray-800 text-white">
                                <tr>
                                    <th className="px-4 py-2">Image</th>
                                    <th className="px-4 py-2">Service Name</th>
                                    <th className="px-4 py-2">Price</th>
                                    <th className="px-4 py-2">Service Area</th>
                                    <th className="px-4 py-2">Description</th>
                                    <th className="px-4 py-2">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {myAddServices.map((service) => (
                                    <tr key={service._id} className="hover:bg-gray-700">
                                        <td className="px-4 py-4">
                                            <img
                                                src={service.image}
                                                alt={service.serviceName}
                                                className="w-20 h-16 object-cover rounded"
                                            />
                                        </td>
                                        <td className="px-4 py-2">{service.serviceName}</td>
                                        <td className="px-4 py-2 text-green-400">${service.price}</td>
                                        <td className="px-4 py-2">{service.serviceArea}</td>
                                        <td className="px-4 py-2">
                                            {service.description?.slice(0, 30)}
                                            {service.description?.length > 30 && "...."}
                                        </td>


                                        <td className="px-4 py-2 font-semibold">

                                            <Link  to={`/update-services/${service._id}`} className="btn shadow-none mr-4"><span className="text-green-700"><FaEdit /></span> Edit</Link>

                                            <button onClick={() => modernDelete(service._id)} className="btn shadow-none"><span className="text-red-700"><RiDeleteBin5Line /></span> Delete</button>
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

export default ManageServices;