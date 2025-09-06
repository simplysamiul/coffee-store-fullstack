import { IoEye } from "react-icons/io5";
import { IoPencilOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2"
import {Link} from "react-router";
import '../style/Coffees.css'

const Coffee = ({ coffee, coffees, setCoffees }) => {
    const { name, chef, photoURL, price, _id } = coffee;
    const handelDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#331A15",
            cancelButtonColor: "#E3B577",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/coffee/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Coffee has been deleted.",
                                icon: "success"
                            });

                            const remainingCoffee = coffees.filter(coffee => id !== coffee._id );
                            setCoffees(remainingCoffee);
                        }
                    })
            }
        });
    }
    return (
        <div className="flex justify-between items-center hover:shadow p-2 border-1 border-white hover:border-chocoLight rounded-xl duration-500 cursor-pointer">
            <div>
                <img src={photoURL} alt="" />
            </div>
            <div className="md:text-sm lg:text-xl mx-4">
                <p className="md:mb-1 xl:mb-2"><span className='text-chocoDark font-bold'>Name : </span>{name}</p>
                <p className="md:mb-1 xl:mb-2"><span className='text-chocoDark font-bold'>Chef : </span>{chef}</p>
                <p className="md:mb-1 xl:mb-2"><span className='text-chocoDark font-bold'>Price : </span>{price}</p>
            </div>
            <div className="flex flex-col">
                <button className="btn p-2 m-2 text-xl bg-chocoLight text-white"><IoEye /></button>
                <Link to={`/update-coffee/${_id}`}><button className="btn p-2 m-2 text-xl bg-[#3C393B] text-white"><IoPencilOutline /></button></Link>
                <button onClick={() => handelDelete(_id)} className="btn p-2 m-2 text-xl bg-[#EA4744] text-white"><MdDelete /></button>
            </div>
        </div>
    );
};

export default Coffee;