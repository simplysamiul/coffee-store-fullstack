import { createBrowserRouter } from "react-router";
import HomePage from "../pages/HomePage";
import App from "../App";
import AddCoffeePage from "../pages/AddCoffeePage";
import UpdateCoffeePage from "../pages/UpdateCoffeePage";
import SignUpPage from "../pages/SignUpPage";
import SignInPage from "../pages/SignInPage";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "/add-coffee",
                element: <PrivateRoute><AddCoffeePage /></PrivateRoute>
            },
            {
                path: "/update-coffee/:id",
                element: <PrivateRoute><UpdateCoffeePage /></PrivateRoute>,
                loader: ({params}) => fetch(`https://coffee-store-backend-seven-bay.vercel.app/coffee/${params.id}`)
            },
            {
                path : "/login",
                element: <SignInPage />
            },
            {
                path: "/signup",
                element: <SignUpPage />
            }
        ]
    },
    {
        path: "*",
        element: <ErrorPage />
    }
])


export default router;