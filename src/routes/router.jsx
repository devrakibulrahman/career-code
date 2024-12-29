import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import Home from "../pages/Home";
import Auth from "../pages/Auth";
import SignUpPage from "../pages/Auth/SignUpPage";
import SignInPage from "../pages/Auth/SignInPage";
import AllJob from "../pages/AllJob";
import Contact from "../pages/Contact";
import Dashboard from "../pages/Dashboard";
import Error from "../pages/Error";
import AddJob from "../pages/AddJob";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/auth',
                element: <Auth></Auth>,
                children: [
                    {
                        path: '/auth/sign_up',
                        element: <SignUpPage></SignUpPage>
                    },
                    {
                        path: '/auth/sign_in',
                        element: <SignInPage></SignInPage>
                    },
                ],
            },
            {
                path: '/all_jobs',
                element: <AllJob></AllJob>
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>,
            },
            {
                path: '/add_job',
                element: <AddJob></AddJob>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '*',
                element: <Error></Error>
            }
        ],
    },
]);

export default router;