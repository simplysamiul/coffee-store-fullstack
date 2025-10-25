import { useEffect, useState } from "react";
import Coffee from "./Coffee";
import { Link } from "react-router";
import coffeeCup from '../assets/icons/1.png';
import '../style/Coffees.css';


const Coffees = () => {
    const [coffees, setCoffees] = useState([]);
    useEffect(() => {
        fetch("https://coffee-store-backend-seven-bay.vercel.app/all-coffee")
            .then(res => res.json())
            .then(data => setCoffees(data))
            .catch(err => console.log(err));
    }, []);
    return (
        <div className="coffee-list-area">
            <h2 className="text-center font-secondary text-chocoDark text-4xl md:text-5xl mb-10">Our Popular Coffees</h2>
            <div className="flex items-center justify-center my-4">
                <Link className="flex items-center justify-center space-x-3 btn bg-chocoLight border-chocoDark" to="/add-coffee">
                    <span className="font-secondary text-chocoDark text-lg">Add Coffee</span>
                    <img className="w-[20px]" src={coffeeCup} alt="" />
                </Link>
            </div>
            <div className="coffee-list-container grid grid-cols-1 md:grid-cols-2 w-10/12 mx-auto gap-10">
                {
                    coffees.map(coffee => <Coffee 
                        key={coffee._id} 
                        coffee={coffee} 
                        setCoffees={setCoffees}
                        coffees={coffees}
                        />)
                }
            </div>
        </div>
    );
};

export default Coffees;