import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthContext";
import useAxiosSecure from "../hooks/useAxiosSecure";


const BookedServices = () => {

  const axiosSecure = useAxiosSecure()
  const { user } = useContext(AuthContext);
  const [bookedServices, setBookedServices] = useState([]);


  useEffect(() => {
    fetchAllBookedServices()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  const fetchAllBookedServices = async () => {
    const { data } = await axiosSecure.get(`/bookings/${user?.email}`)
    setBookedServices(data)
  }


  return (
    <div className="py-16 p-6 min-h-screen bg-linear-to-br from-gray-700 via-black to-gray-800 text-white ">

      <h2 className="text-3xl font-bold text-center ">Booked Services</h2>
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
