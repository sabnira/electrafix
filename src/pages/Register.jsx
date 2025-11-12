import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthContext";
import Swal from "sweetalert2";


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
        <div className="card bg-base-300 mx-2 md:w-xl md:mx-auto my-8 rounded-4xl">
            <div className="card-body p-8">
                <h2 className="text-3xl mx-auto">Register in your Account</h2>
                <form onSubmit={handleSubmit} className="form space-y-2 text-lg">

                    <label className="label">Name: </label>
                    <input type="text" name="name" className="input w-full" placeholder="Name" required />

                    <label className="label">Email: </label>
                    <input type="email" name="email" className="input w-full" placeholder="Email" required />

                    <label className="label">Photo URL: </label>
                    <input type="text" name="photo" className="input w-full" placeholder="URL" required />

                    <label className="label">Password: </label>
                    <div className="input w-full flex">
                        <input type={showPassword ? 'text' : 'password'} name="password" placeholder="Password" required autoComplete="" />

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

                    <button className="btn w-full mt-4 text-white bg-[#FF7F00] text-lg">Sign up</button>
                </form>

                <div className="divider">or</div>

                <button onClick={handleGoogleSignIn} className="btn w-full bg-white text-black text-lg mb-2">
                    Login with Google <FcGoogle className="text-2xl" /></button>

                <p className="text-center text-lg">
                    Already Have An Account? <NavLink to="/login" className="text-orange-500 font-bold underline">Log in</NavLink>
                </p>
            </div>
        </div>
    );
};

export default Register;