import { FaRegLightbulb, FaHandshake, FaWrench, FaCheckCircle } from "react-icons/fa";

const About = () => {
    return (
        <div className="bg-[#05060f] text-gray-300">


            <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <span className="badge badge-outline border-cyan-400 text-cyan-400 mb-4">
                        About ElectraFix
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
                        Powering the Future with
                        <span className="text-cyan-400 neon-text"> Smart Electrical </span>
                        Services
                    </h1>
                    <p className="mt-6 text-gray-400 leading-relaxed">
                        ElectraFix delivers professional electrical repair, installation,
                        and maintenance services designed for modern homes and businesses.
                        We blend technology, safety, and reliability into every job.
                    </p>
                </div>


                <div className="card bg-white/5 backdrop-blur border border-white/10 shadow-xl">
                    <div className="card-body">
                        <h3 className="card-title text-cyan-400">Why ElectraFix?</h3>
                        <ul className="space-y-3 mt-4">
                            <li className="flex items-center gap-3">
                                <FaCheckCircle className="text-cyan-400" />
                                Certified & Experienced Team
                            </li>
                            <li className="flex items-center gap-3">
                                <FaCheckCircle className="text-cyan-400" />
                                Transparent Pricing
                            </li>
                            <li className="flex items-center gap-3">
                                <FaCheckCircle className="text-cyan-400" />
                                24/7 Emergency Support
                            </li>
                        </ul>
                    </div>
                </div>
            </section>


            <section className="bg-[#151823] py-20">
                <div className="max-w-5xl mx-auto px-6">
                    <h2 className="text-3xl font-semibold text-center text-purple-400 mb-12">
                        Our Story
                    </h2>

                    <div className="space-y-10">
                        <div className="flex gap-6">
                            <span className="text-cyan-400 text-xl">01</span>
                            <div>
                                <h3 className="text-lg font-semibold">Founded with a Vision</h3>
                                <p className="text-gray-400 mt-2">
                                    ElectraFix was created to bring reliable, modern electrical
                                    services to customers who value quality and safety.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <span className="text-fuchsia-400 text-xl">02</span>
                            <div>
                                <h3 className="text-lg font-semibold">Growing with Trust</h3>
                                <p className="text-gray-400 mt-2">
                                    Through honest service and skilled workmanship, we built
                                    long-term relationships with our clients.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <span className="text-purple-400 text-xl">03</span>
                            <div>
                                <h3 className="text-lg font-semibold">Powering the Future</h3>
                                <p className="text-gray-400 mt-2">
                                    Today, ElectraFix continues to innovate, offering smarter
                                    solutions for energy-efficient living.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            
            <section className="py-20 max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-semibold text-center text-cyan-400 mb-12">
                    Our Core Values
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="card bg-[#0b0e1a] border border-cyan-500/20 hover:shadow-[0_0_20px_#22d3ee] transition">
                        <div className="card-body items-center text-center">
                            <FaRegLightbulb className="text-4xl text-cyan-400" />
                            <h3 className="mt-4 font-semibold">Innovation</h3>
                            <p className="text-sm text-gray-400">
                                Using modern tools and smart techniques.
                            </p>
                        </div>
                    </div>

                    <div className="card bg-[#0b0e1a] border border-fuchsia-500/20 hover:shadow-[0_0_20px_#d946ef] transition">
                        <div className="card-body items-center text-center">
                            <FaHandshake className="text-4xl text-fuchsia-400" />
                            <h3 className="mt-4 font-semibold">Trust</h3>
                            <p className="text-sm text-gray-400">
                                Honest pricing and dependable service.
                            </p>
                        </div>
                    </div>

                    <div className="card bg-[#0b0e1a] border border-purple-500/20 hover:shadow-[0_0_20px_#a855f7] transition">
                        <div className="card-body items-center text-center">
                            <FaWrench className="text-4xl text-purple-400" />
                            <h3 className="mt-4 font-semibold">Quality</h3>
                            <p className="text-sm text-gray-400">
                                Precision and care in every project.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default About;

