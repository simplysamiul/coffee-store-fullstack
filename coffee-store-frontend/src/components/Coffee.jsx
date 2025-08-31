import { IoEye } from "react-icons/io5";
import { IoPencilOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

const Coffee = ({coffee}) => {
    const {name, chef, photoURL, price} = coffee;
    return (
        <div className="flex justify-between items-center hover:shadow p-2 border-1 border-white hover:border-chocoLight rounded-lg duration-500 cursor-pointer">
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
                <button className="btn p-2 m-2 text-xl bg-[#3C393B] text-white"><IoPencilOutline /></button>
                <button className="btn p-2 m-2 text-xl bg-[#EA4744] text-white"><MdDelete /></button>
            </div>
        </div>
    );
};

export default Coffee;