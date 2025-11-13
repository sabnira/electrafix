import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthContext";
import Swal from "sweetalert2";
import register from "../assets/register.json";
import Lottie from "lottie-react";


const Register = () => {

    const navigate = useNavigate()
    const { createUser, signInWithGoogle, updateUserProfile, setUser } = useContext(AuthContext)

    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const name = form.name.value
        const photo = form.photo.value
        const pass = form.password.value
        // console.log({ email, pass, name, photo })

        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
        if (!passwordRegex.test(pass)) {
            setErrorMessage('Password must be at least 6 characters long and contain both uppercase and lowercase letters.');
            return;
        }

        try {
            const result = await createUser(email, pass)

            await updateUserProfile(name, photo)
            setUser({ ...result.user, photoURL: photo, displayName: name })

            console.log("User updated:", { ...result.user, photoURL: photo, displayName: name });

            Swal.fire({
                icon: "success",
                title: "Registration Successful",
                text: "Your account has been created successfully.",
                confirmButtonColor: "#43934A",
            })
            navigate('/')
            // navigate(location?.state ? location.state : "/");
        } catch (err) {
            setErrorMessage(err.message);
        }
    }


    const handleGoogleSignIn = async () => {
        try {
            await signInWithGoogle()
            Swal.fire({
                icon: "success",
                title: "Signed In Successfully",
                text: "Using your Google account.",
                confirmButtonColor: "#43934A"
            });
            navigate('/')
        } catch (err) {
            setErrorMessage(err.message);
        }
    }

    return (
       
        <div className="bg-linear-to-r from-purple-950 via-black to-blue-950 relative overflow-hidden py-10">
            <div className="w-11/12 mx-auto min-h-screen flex flex-col md:flex-row items-center justify-center">

                <div>
                    <Lottie className="w-md md:w-xl" animationData={register} loop={true} />
                </div>

                <div className="card mx-2 md:w-xl md:mx-auto my-8 rounded-3xl 
                    bg-black/50 backdrop-blur-md border border-white/40 
                    text-white relative z-10">
                    <div className="card-body p-10">
                        <h2 className="text-4xl mx-auto font-extrabold text-transparent bg-clip-text 
                       bg-linear-to-r from-blue-400 via-purple-500 to-pink-400 
                       drop-shadow-[0_0_15px_rgba(59,130,246,0.8)] mb-6">
                            Register in your Account
                        </h2>

                        <form onSubmit={handleSubmit} className="form space-y-4 text-lg">
                            <label className="label">Name: </label>
                            <input
                                type="text"
                                name="name"
                                className="input w-full bg-black/40 border border-gray-600 
                       focus:border-blue-400 focus:ring focus:ring-blue-500/40 
                       text-white rounded-lg shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                                placeholder="Name"
                                required
                            />

                            <label className="label">Email: </label>
                            <input
                                type="email"
                                name="email"
                                className="input w-full bg-black/40 border border-gray-600 
                       focus:border-purple-400 focus:ring focus:ring-purple-500/40 
                       text-white rounded-lg shadow-[0_0_15px_rgba(147,51,234,0.4)]"
                                placeholder="Email"
                                required
                            />

                            <label className="label">Photo URL: </label>
                            <input
                                type="text"
                                name="photo"
                                className="input w-full bg-black/40 border border-gray-600 
                       focus:border-purple-400 focus:ring focus:ring-purple-500/40 
                       text-white rounded-lg shadow-[0_0_15px_rgba(147,51,234,0.4)]"
                                placeholder="URL"
                                required
                            />

                            <label className="label">Password: </label>
                            <div className="flex w-full items-center bg-black/40 border border-gray-600 
                          rounded-lg shadow-[0_0_15px_rgba(59,130,246,0.4)] focus-within:border-purple-400">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    className="flex-1 bg-transparent text-white px-2 py-2 focus:outline-none"
                                    placeholder="Password"
                                    required
                                    autoComplete=""
                                />
                                <button
                                    onClick={() => setShowPassword(!showPassword)}
                                    type="button"
                                    className="btn btn-xs bg-black text-white hover:text-blue-400 mr-2">
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>

                            {errorMessage && (
                                <p className="text-red-400 font-semibold">{errorMessage}</p>
                            )}

                            <button className="btn w-full mt-4 text-white text-lg 
                             bg-linear-to-r from-blue-600 to-purple-600  
                             hover:scale-105 transition-transform border-none">
                                Sign up
                            </button>
                        </form>

                        <div className="divider text-gray-200">or</div>

                        <button
                            onClick={handleGoogleSignIn}
                            className="btn w-full bg-white text-black text-lg mb-2 
                     hover:bg-gray-200 hover:scale-105 transition-transform shadow-lg">
                            Login with Google <FcGoogle className="text-2xl" />
                        </button>

                        <p className="text-center text-lg">
                            Already Have An Account? 
                            <NavLink to="/login"
                                className="text-orange-400 font-bold underline hover:text-orange-300">
                                Log in
                            </NavLink>
                        </p>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Register;