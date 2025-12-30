import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../provider/AuthContext";


const BookedServices = () => {

  const { user } = useContext(AuthContext);
  const [bookedServices, setBookedServices] = useState([]);


  useEffect(() => {
    fetchAllBookedServices()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  const fetchAllBookedServices = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/bookings/${user?.email}`)
    setBookedServices(data)
  }


  // const handleStatusChange = async (id, prevStatus, status) => {

  //   if (prevStatus !== 'Pending')
  //     return console.log('Not Allowed')

  //   console.log({id, prevStatus, status});

  // }


  return (
    <div className="p-6 min-h-screen bg-linear-to-br from-gray-700 via-black to-gray-800 text-white ">

      <h2 className="text-3xl font-bold mt-10 text-center ">Booked Services</h2>
      <p className="text-center mt-2 mb-8">Monitor all your booked services in one place and stay informed about their current status and details</p>

      <div className="w-11/12 mx-auto bg-white/10 p-8 border border-gray-700">
        {bookedServices.length === 0 ? (
          <p className="text-gray-400 text-center text-2xl">
            You haven't booked any services yet.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="px-4 py-2">Image</th>
                  <th className="px-4 py-2">Service Name</th>
                  <th className="px-4 py-2">Service Provider</th>
                  <th className="px-4 py-2">Price</th>
                  <th className="px-4 py-2">Date</th>
                  <th className="px-4 py-2">Instruction</th>
                  <th className="px-4 py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {bookedServices.map((service) => (
                  <tr key={service._id} className="hover:bg-gray-700">
                    <td className="px-4 py-4">
                      <img
                        src={service.serviceImage}
                        alt={service.serviceName}
                        className="w-20 h-16 object-cover rounded"
                      />
                    </td>
                    <td className="px-4 py-2">{service.serviceName}</td>
                    <td className="px-4 py-2">{service.providerName} <br /> {service.providerEmail}</td>
                    <td className="px-4 py-2 text-green-400">${service.price}</td>
                    <td className="px-4 py-2">{service.serviceTakingDate}</td>
                    <td className="px-4 py-2 text-gray-300">
                      {service.specialInstruction || "—"}
                    </td>
                    <td className="px-4 py-2 font-semibold">
                      {service.serviceStatus}
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

export default BookedServices;
