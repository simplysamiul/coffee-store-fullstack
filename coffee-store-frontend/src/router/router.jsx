import { createBrowserRouter } from "react-router";
import HomePage from "../pages/HomePage";
import App from "../App";
import AddCoffeePage from "../pages/AddCoffeePage";
import UpdateCoffeePage from "../pages/UpdateCoffeePage";
import SignUpPage from "../pages/SignUpPage";
import SignInPage from "../pages/SignInPage";

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
                element: <AddCoffeePage />
            },
            {
                path: "/update-coffee/:id",
                element: <UpdateCoffeePage />,
                loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
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
])


export default router;