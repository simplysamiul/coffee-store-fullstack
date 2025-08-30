import { createBrowserRouter } from "react-router";
import HomePage from "../pages/HomePage";
import App from "../App";
import DetailsPage from "../pages/DetailsPage";

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
                path: "/details",
                element: <DetailsPage />
            }
        ]
    },
])


export default router;