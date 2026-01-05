import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { AuthContext } from "../provider/AuthContext";
import toast from "react-hot-toast";

const ServiceDetails = () => {

  const navigate = useNavigate()
  const { id } = useParams()
  const { user } = useContext(AuthContext);

  const [service, setService] = useState({})
  const [isOpen, setIsOpen] = useState(false);

  const [formData, setFormData] = useState({
    serviceTakingDate: "",
    specialInstruction: ""
  })

  useEffect(() => {
    fetchService()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  const fetchService = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/service/${id}`)
    setService(data)
  }

  const { _id, image, serviceName, price, description, serviceArea, serviceProvider } = service || {};


  const handlePurchase = async () => {

    //check same email validation
    if (user?.email === serviceProvider?.email)
      return toast.error('Action not permitted!')

    const booking = {
      serviceId: _id,
      serviceName,
      serviceImage: image,
      providerEmail: serviceProvider?.email,
      providerName: serviceProvider?.name,
      userEmail: user?.email,
      userName: user?.displayName,
      serviceTakingDate: formData.serviceTakingDate,
      specialInstruction: formData.specialInstruction,
      price,
      serviceStatus: "pending",
    };

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/bookings`, booking);
      toast.success('Booking submitted successfully!')
      navigate('/')
    } catch (err) {
      console.log(err);
      toast.error(err?.response?.data)
    }

    setIsOpen(false);

  }

  
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-700 via-black to-gray-800 text-white flex flex-col items-center py-16 px-4">

      <div className="w-full max-w-5xl relative rounded-xl overflow-hidden shadow-lg">
        <img src={image} alt={serviceName} className="w-full h-80 object-cover" />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center"></div>
      </div>

      <div className="mt-10 w-full max-w-4xl bg-white/10  rounded-xl shadow-xl p-14 border border-gray-700 space-y-6">

        <h2 className="text-3xl font-bold">{serviceName}</h2>
        <p className="text-gray-200"><span className="font-bold">Description: </span>{description}</p>

        <div className="inline-block px-6 py-2 rounded-full bg-gray-200 text-black mr-4 font-bold">
          Price: ${price}
        </div>

        {serviceArea && (
          <div className="inline-block px-6 py-2 rounded-full bg-linear-to-r from-indigo-600 to-blue-700 font-medium shadow-md">
            <div className="flex items-center gap-2"><FaLocationDot /> <span className="font-bold">Location: </span>{serviceArea}</div>
          </div>
        )}

        {serviceProvider && (
          <div className="flex items-center gap-3">

            <p className="font-bold">Service Provider: </p>
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

        <button
          onClick={() => setIsOpen(true)}
          className="px-6 py-3 rounded-lg bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg font-semibold">
          Book Service
        </button>
      </div>


      {/* modal */}
      {isOpen && (
        <dialog open className="modal">
          <div className="modal-box bg-gray-900 text-white">
            <h3 className="text-2xl font-bold mb-4">Confirm Booking</h3>

            
            <div className="space-y-2 text-sm">
              <p><strong>Service ID:</strong> {_id}</p>
              <p><strong>Service Name:</strong> {serviceName}</p>
              <p><strong>Provider Name:</strong> {serviceProvider?.name}</p>
              <p><strong>Provider email:</strong> {serviceProvider?.email}</p>
              <p><strong>Current User Name:</strong> {user?.displayName}</p>
              <p><strong>Current User email:</strong> {user?.email}</p>
              <p><strong>Price:</strong> ${price}</p>
            </div>

            
            <div className="mt-4 space-y-3">
              <input
                type="date"
                value={formData.serviceTakingDate}
                onChange={(e) =>
                  setFormData({ ...formData, serviceTakingDate: e.target.value })
                }
                className="input input-bordered w-full bg-gray-800 text-white"
              />

              <textarea
                placeholder="Special instructions (address, area, plan)..."
                value={formData.specialInstruction}
                onChange={(e) =>
                  setFormData({ ...formData, specialInstruction: e.target.value })
                }
                className="textarea textarea-bordered w-full bg-gray-800 text-white"
              />
            </div>

            
            <div className="modal-action flex flex-col gap-2">
              <button
                onClick={handlePurchase}
                className="btn w-full bg-linear-to-r from-green-500 to-emerald-600 text-white hover:from-emerald-600 hover:to-green-600 border-none shadow-none text-lg"
              >
                Purchase
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="btn w-full bg-gray-700 hover:bg-gray-600 border-none shadow-none text-lg text-white"
              >
                Cancel
              </button>
            </div>
          </div>
        </dialog>
      )}

    </div>
  );
};

export default ServiceDetails;