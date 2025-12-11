import axios from "axios";
import { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../provider/AuthContext";


const AddServices = () => {

    const {user} = useContext(AuthContext)

    const handleAddServices = async e => {
        e.preventDefault();

        const form = e.target
        const image = form.image.value
        const serviceName = form.serviceName.value
        const price = form.price.value
        const serviceArea = form.serviceArea.value
        const description = form.description.value

        console.log({image, serviceName, price, serviceArea, description})

        const formData = {
            image,
            serviceName,
            price,
            serviceArea,
            description,
            serviceProvider: {
                email: user?.email,
                name: user?.displayName,
                photo: user?.photoURL,
            }
        }

        try {
            //make a post request
            await axios.post(`${import.meta.env.VITE_API_URL}/add-service`, formData)
            form.reset()
            toast.success('Data Added Successfully!!!')

        } catch (err) {
            console.log(err)
            toast.error(err.message)
        }

    }

    return (
        <div className="bg-linear-to-r from-black via-black to-blue-950 relative overflow-hidden py-16">

            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
            
            <div className="card p-4 mx-2 md:w-2xl md:mx-auto rounded-3xl  backdrop-blur-md border bg-black/80  border-white/40 text-white relative ">

                <div className="card-body">

                    <h2 className="text-4xl mx-auto font-extrabold text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-purple-500 to-pink-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.8)] mb-6">
                        Add Service
                    </h2>

                    <p className="text-center text-xl text-gray-400 mb-6">
                        Add your electronics repair services to the platform so customers can easily find and book them.
                    </p>

                    <form onSubmit={handleAddServices} className="form space-y-6 text-lg">

                        <div className="flex flex-col">
                            <label className="label pb-2">Image URL of the Service</label>
                            <input type="text" name="image" className="input w-full bg-black/40 border border-gray-600 focus:border-blue-400 text-white rounded-lg shadow-[0_0_15px_rgba(59,130,246,0.4)]" placeholder="Image URL" required />
                        </div>

                        <div className="flex flex-col">
                            <label className="label pb-2">Service Name</label>
                            <input type="text" name="serviceName" className="input w-full bg-black/40 border border-gray-600 focus:border-blue-400 text-white rounded-lg shadow-[0_0_15px_rgba(59,130,246,0.4)]" placeholder="Service Name" required />
                        </div>

                        <div className="flex flex-col">
                            <label className="label pb-2">Price</label>
                            <input type="number" name="price" className="input w-full bg-black/40 border border-gray-600 focus:border-blue-400 text-white rounded-lg shadow-[0_0_15px_rgba(59,130,246,0.4)]" placeholder="Price" required />
                        </div>

                        <div className="flex flex-col">
                            <label className="label pb-2">Service Area</label>
                            <input type="text" name="serviceArea" className="input w-full bg-black/40 border border-gray-600 focus:border-blue-400 text-white rounded-lg shadow-[0_0_15px_rgba(59,130,246,0.4)]" placeholder="Service Area" required />
                        </div>

                        <div className="flex flex-col">
                            <label className="label pb-2">Description</label>
                            <textarea type="text" name="description" className="textarea textarea-bordered input w-full bg-black/40 border border-gray-600 focus:border-blue-400 text-white rounded-lg shadow-[0_0_15px_rgba(59,130,246,0.4)]" placeholder="Write a short Description" cols="30" rows="3" required />
                        </div>

                        <button className="btn w-full mt-4 text-white text-lg bg-linear-to-r from-blue-600 to-purple-600 hover:scale-105 transition-transform border-none">
                            Add
                        </button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddServices;