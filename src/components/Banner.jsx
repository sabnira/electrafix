import Lottie from "lottie-react";
import Navbar from "./Navbar";
import worker from "../assets/yellow-worker.json";
import welder from "../assets/welder.json";
import computer from "../assets/computer.json";
import electrician from "../assets/electrician.json";



const Banner = () => {
    return (
        <section className="relative flex flex-col bg-black text-white overflow-hidden">

            {/* Animated gradient background */}
            <div
                className="absolute inset-0"
                style={{
                    background: "linear-gradient(270deg, #6b21a8, #000000, #1e3a8a)",
                    backgroundSize: "600% 600%",
                    animation: "gradientShift 10s ease infinite",
                }}
            ></div>

            {/* Overlay for depth */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>


            {/* Decorative blur lights */}
            <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-blue-500/20 blur-[150px] rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-indigo-400/20 blur-[150px] rounded-full"></div>



            <div className="relative z-20 w-full">
                <Navbar></Navbar>
            </div>


            <div className="w-10/12 mx-auto flex flex-col md:flex-row gap-6 items-center justify-center content-center mt-20 mb-40">


                <div className="relative z-10 flex-1 flex items-center justify-center text-center md:text-left mx-auto">
                    <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-xl hover:scale-105 transition-transform">
                        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-purple-500 to-pink-400">
                            We Bring Electronics Back to Life⚡
                        </h1>

                        <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl">
                            From TVs and fridges to PCs and ovens — our expert technicians provide fast, affordable, and reliable repair services right at your doorstep.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start">
                            <button className="px-6 py-3 bg-linear-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 transition-all rounded-lg font-semibold shadow-lg">
                                Book a Service
                            </button>
                            <button className="px-6 py-3 bg-transparent border border-gray-400 hover:border-blue-400 hover:text-blue-400 transition-all rounded-lg font-semibold">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row">
                    <div className="flex flex-col">
                        <Lottie className="w-40 md:w-48" animationData={worker} loop={true} />
                        <Lottie className="w-40 md:w-48" animationData={electrician} loop={true} />
                    </div>
                    <div className="flex flex-col">
                        <Lottie className="w-40 md:w-48" animationData={computer} loop={true} />
                        <Lottie className="w-40 md:w-48" animationData={welder} loop={true} />
                    </div>

                </div>

            </div>

            <div class="custom-shape-divider-bottom">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>


            {/* Embedded keyframes */}
            <style>
                {`
                    @keyframes gradientShift {
                        0% { background-position: 0% 50%; }
                        50% { background-position: 100% 50%; }
                        100% { background-position: 0% 50%; }
                    }
                `}
            </style>
        </section>
    );
};

export default Banner;
