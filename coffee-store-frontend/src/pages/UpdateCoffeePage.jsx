import UpdateCoffee from "../components/UpdateCoffee";
import { useLoaderData } from "react-router";


const UpdateCoffeePage = () => {
    const data = useLoaderData();
    return (
        <div>
            <UpdateCoffee data={data} />
        </div>
    );
};

export default UpdateCoffeePage;