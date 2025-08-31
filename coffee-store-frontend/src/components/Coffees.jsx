import { useEffect, useState } from "react";
import Coffee from "./Coffee";
import '../style/Coffees.css';


const Coffees = () => {
    const [coffees, setCoffees] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/all-coffee")
        .then(res => res.json())
        .then(data => setCoffees(data))
        .catch(err => console.log(err));
    },[]);
    return (
        <div className="coffee-list-area">
            <h2 className="text-center font-secondary text-chocoDark text-4xl md:text-5xl mb-10">Our Popular Coffees</h2>
            <div className="coffee-list-container grid grid-cols-1 md:grid-cols-2 w-10/12 mx-auto gap-10">
                {
                    coffees.map(coffee => <Coffee key={coffee._id} coffee={coffee} />)
                }
            </div>
        </div>
    );
};

export default Coffees;