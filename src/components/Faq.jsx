import Lottie from "lottie-react";
import faq from "../assets/client-FAQ.json";

const Faq = () => {
    return (
        <section className="py-20 bg-[#141620]">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-20">
                    <h1 className="text-3xl md:text-5xl font-extrabold inline-block text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400">
                        Frequently Asked Questions
                    </h1>

                    <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                        Everything you need to know about Electrafix services and support.
                    </p>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Left Image */}
                    <div className="mx-auto">
                        <Lottie className="w-xs md:w-sm" animationData={faq} loop={true} />

                    </div>

                    {/* Right FAQ */}
                    <div className="space-y-4">

                        <div className="collapse collapse-arrow bg-white/5 backdrop-blur-md border border-cyan-400/20 rounded-xl">
                            <input type="radio" name="faq-accordion" defaultChecked />
                            <div className="collapse-title text-lg font-medium text-white">
                                What services does Electrafix provide?
                            </div>
                            <div className="collapse-content text-gray-300">
                                <p>
                                    We provide residential and commercial electrical services including wiring,
                                    installation, repair, maintenance, and safety inspections.
                                </p>
                            </div>
                        </div>

                        <div className="collapse collapse-arrow bg-white/5 backdrop-blur-md border border-purple-400/20 rounded-xl">
                            <input type="radio" name="faq-accordion" />
                            <div className="collapse-title text-lg font-medium text-white">
                                Are your electricians licensed and insured?
                            </div>
                            <div className="collapse-content text-gray-300">
                                <p>
                                    Yes, our electricians are fully licensed, experienced, and insured for your safety.
                                </p>
                            </div>
                        </div>

                        <div className="collapse collapse-arrow bg-white/5 backdrop-blur-md border border-pink-400/20 rounded-xl">
                            <input type="radio" name="faq-accordion" />
                            <div className="collapse-title text-lg font-medium text-white">
                                Do you offer emergency services?
                            </div>
                            <div className="collapse-content text-gray-300">
                                <p>
                                    Absolutely. We provide emergency electrical support to resolve urgent issues quickly.
                                </p>
                            </div>
                        </div>

                        <div className="collapse collapse-arrow bg-white/5 backdrop-blur-md border border-cyan-400/20 rounded-xl">
                            <input type="radio" name="faq-accordion" />
                            <div className="collapse-title text-lg font-medium text-white">
                                How can I book a service?
                            </div>
                            <div className="collapse-content text-gray-300">
                                <p>
                                    You can book directly from our website or contact our support team anytime.
                                </p>
                            </div>
                        </div>

                        <div className="collapse collapse-arrow bg-white/5 backdrop-blur-md border border-purple-400/20 rounded-xl">
                            <input type="radio" name="faq-accordion" />
                            <div className="collapse-title text-lg font-medium text-white">
                                How much do your services cost?
                            </div>
                            <div className="collapse-content text-gray-300">
                                <p>
                                    Pricing depends on the service type and complexity. Contact us for a free
                                    consultation and transparent pricing.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;
