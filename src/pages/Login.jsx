import { useContext, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2"
import { AuthContext } from "../provider/AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";


const Login = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const { signIn, signInWithGoogle, setUser } = useContext(AuthContext)

    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const from = location?.state || '/'
    console.log(from)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const pass = form.password.value

        try {
            const user = await signIn(email, pass)
            setUser(user)

            Swal.fire({
                icon: "success",
                title: "Login Successful",
                text: "You have logged in successfully.",
                confirmButtonColor: "#43934A"
            });

            navigate(from, { replace: true })

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
        <div className="card bg-base-300 mx-2 md:w-xl md:mx-auto my-8 rounded-4xl">
            <div className="card-body p-8">
                <h2 className="text-3xl mx-auto">Log in your Account</h2>
                <form onSubmit={handleSubmit} className="form space-y-2 text-lg">

                    <label className="label">Email: </label>
                    <input type="email" name="email" className="input w-full" placeholder="Email" required />

                    <label className="label">Password: </label>
                    <div className="input w-full flex">
                        <input type={showPassword ? 'text' : 'password'} name="password" placeholder="Password" required />

                        <button
                            onClick={() => setShowPassword(!showPassword)}
                            type="button" className="btn btn-xs ">
                            {
                                showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                            }
                        </button>
                    </div>

                    {
                        errorMessage && <p className="text-red-500">
                            {errorMessage}
                        </p>
                    }

                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn w-full mt-4 text-white bg-[#FF7F00] text-lg">Log in</button>
                </form>

                <div className="divider">or</div>

                <button onClick={handleGoogleSignIn} className="btn w-full bg-white text-black text-lg mb-2">
                    Login with Google <FcGoogle className="text-2xl" /></button>

                <p className="text-center text-lg">
                    Don't Have An Account? <NavLink to="/register" className="text-orange-500 font-bold underline">Sign up</NavLink>
                </p>
            </div>
        </div>
    )
}

export default Login;