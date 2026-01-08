const ClientSay = () => {
    return (
        <section className="py-20 bg-linear-to-b from-black via-[#05010f] to-black">
            <div className="max-w-7xl mx-auto px-6">


                <div className="text-center mb-20">
                    <h1 className="text-3xl md:text-5xl font-extrabold inline-block text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400">
                        What Our Clients Say
                    </h1>
                    <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                        Real feedback from customers who trusted Electrafix for reliable and professional electrical services.
                    </p>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Card 1 */}
                    <div className="bg-white/5 backdrop-blur-md border border-cyan-400/20 rounded-2xl p-6 shadow-lg hover:shadow-cyan-400/40 transition-all hover:-translate-y-2">
                        <p className="text-gray-300 mb-4">
                            “Electrafix solved my wiring issue quickly and professionally. The service was smooth and stress-free.”
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-cyan-400/20 flex items-center justify-center text-cyan-400 font-bold">
                                A
                            </div>
                            <div>
                                <h4 className="text-white font-semibold">Arafat Hossain</h4>
                                <span className="text-sm text-cyan-400">Homeowner</span>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white/5 backdrop-blur-md border border-purple-400/20 rounded-2xl p-6 shadow-lg hover:shadow-purple-400/40 transition-all hover:-translate-y-2">
                        <p className="text-gray-300 mb-4">
                            “Highly skilled electricians! Everything was done on time with great attention to safety.”
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-purple-400/20 flex items-center justify-center text-purple-400 font-bold">
                                S
                            </div>
                            <div>
                                <h4 className="text-white font-semibold">Sabina Rahman</h4>
                                <span className="text-sm text-purple-400">Office Manager</span>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white/5 backdrop-blur-md border border-pink-400/20 rounded-2xl p-6 shadow-lg hover:shadow-pink-400/40 transition-all hover:-translate-y-2">
                        <p className="text-gray-300 mb-4">
                            “From booking to completion, Electrafix exceeded my expectations. Definitely recommended!”
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-pink-400/20 flex items-center justify-center text-pink-400 font-bold">
                                R
                            </div>
                            <div>
                                <h4 className="text-white font-semibold">Rashad Ahmed</h4>
                                <span className="text-sm text-pink-400">Shop Owner</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ClientSay;
