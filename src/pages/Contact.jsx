import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {

    return (
        <section className="min-h-screen bg-black py-20">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-20">

                    <h1 className="text-3xl md:text-5xl font-extrabold inline-block text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400">
                        Contact Us
                    </h1>
                    <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                        Have questions or need electrical services? Get in touch with Electrafix today.
                    </p>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    <div className="space-y-8">

                        <div className="bg-white/5 backdrop-blur-md border border-cyan-400/20 rounded-2xl p-6 shadow-lg">
                            <h3 className="text-xl font-semibold text-white mb-2 flex gap-2 items-center"><FaLocationDot className="text-red-500"/> Our Location</h3>
                            <p className="text-gray-300">
                                Chattogram, Bangladesh <br /> Serving nearby areas
                            </p>
                        </div>

                        <div className="bg-white/5 backdrop-blur-md border border-purple-400/20 rounded-2xl p-6 shadow-lg">
                            <h3 className="text-xl font-semibold text-white mb-2 flex gap-2 items-center"><FaPhone className="text-green-500"/> Phone</h3>
                            <p className="text-gray-300">+880 1XXX-XXXXXX</p>
                        </div>

                        <div className="bg-white/5 backdrop-blur-md border border-pink-400/20 rounded-2xl p-6 shadow-lg">
                            <h3 className="text-xl font-semibold text-white mb-2 flex gap-2 items-center"><MdEmail className="text-yellow-500"/> Email</h3>
                            <p className="text-gray-300">support@electrafix.com</p>
                        </div>

                    </div>


                    <div className="bg-white/5 backdrop-blur-md border border-cyan-400/20 rounded-2xl p-8 shadow-xl">

                        <h2 className="text-2xl font-bold text-white mb-6">
                            Send Us a Message
                        </h2>

                        <form className="space-y-4">

                            <input
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full bg-black/40 text-white border-cyan-400/30 focus:border-cyan-400"
                            />

                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full bg-black/40 text-white border-purple-400/30 focus:border-purple-400"
                            />

                            <input
                                type="text"
                                placeholder="Subject"
                                className="input input-bordered w-full bg-black/40 text-white border-pink-400/30 focus:border-pink-400"
                            />

                            <textarea
                                rows="4"
                                placeholder="Your Message"
                                className="textarea textarea-bordered w-full bg-black/40 text-white border-cyan-400/30 focus:border-cyan-400"
                            ></textarea>

                            <button className="btn w-full bg-linear-to-r from-cyan-400 to-purple-500 text-black font-bold hover:scale-105 transition-transform shadow-none border-none">
                                Send Message
                            </button>

                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
