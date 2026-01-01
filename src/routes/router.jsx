import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllServices from "../pages/AllServices";
import AddServices from "../pages/AddServices";
import ServiceDetails from "../pages/ServiceDetails";
import BookedServices from "../pages/BookedServices";
import ServiceToDo from "../pages/ServiceToDo";
import ManageServices from "../pages/ManageServices";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/register',
                element: <Register />,
            },
            {
                path: '/services',
                element: <AllServices />
            },
            {
                path: '/add-services',
                element: <AddServices />
            },
            {
                path: '/service/:id',
                element: <ServiceDetails></ServiceDetails>
            },
            {
                path: '/booked-services',
                element: <BookedServices></BookedServices>
            },
            {
                path: '/service-to-do',
                element: <ServiceToDo></ServiceToDo>
            },
            {
                path: '/manage-services',
                element: <ManageServices></ManageServices>
            }
        ]
    },
]);


export default router;