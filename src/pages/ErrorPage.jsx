import { useNavigate } from "react-router-dom";


const ErrorPage = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate("/");
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <h2 className="text-8xl font-bold text-red-700">404</h2>
            <p className="mt-4 text-2xl">Oops! Page Not Found</p>
            <p className="my-6 text-lg">
                The page you are looking for might have been removed or is temporarily unavailable.
            </p>
            <button
                onClick={handleGoHome}
                className="px-6 py-3 btn btn-neutral rounded-xl shadow-md"
            >
                Go Back To Home
            </button>
        </div>
    );
}

export default ErrorPage;


