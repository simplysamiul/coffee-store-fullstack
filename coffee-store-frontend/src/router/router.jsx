import { createBrowserRouter } from "react-router";
import HomePage from "../pages/HomePage";
import App from "../App";
import DetailsPage from "../pages/DetailsPage";
import DashboardPage from "../pages/Dashboard/DashboardPage";
import AddCoffee from "../components/dashboard/AddCoffee";

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
    {
        path: "/add-coffee",
        element: <DashboardPage />
    }
])


export default router;