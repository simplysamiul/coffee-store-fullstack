import { toast } from "react-toastify";
import Swal from "sweetalert2"


const UpdateCoffee = ({ data }) => {
    const { category, chef, details, name, photoURL, price, quantity, supplier, _id } = data;

    // coffee update function
    const handelUpdateCoffeeForm = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const supplier = form.supplier.value;
        const category = form.category.value;
        const photoURL = form.photoURL.value;
        const chef = form.chef.value;
        const price = form.price.value;
        const details = form.details.value;
        const quantity = form.quantity.value;
        const updateCoffee = { name, supplier, category, photoURL, chef, price, details, quantity };

        
            Swal.fire({
                        title: "Are you sure?",
                        text: "You won't be able to revert this!",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#331A15",
                        cancelButtonColor: "#E3B577",
                        confirmButtonText: "Yes, update it!"
                    }).then((result) => {
                        if (result.isConfirmed) {
                            // update coffee
                            fetch(`http://localhost:5000/coffee/${_id}`, {
                                method: "PUT",
                                headers: {"Content-Type" : "application/json"},
                                body : JSON.stringify(updateCoffee)
                            })
                                .then(res => res.json())
                                .then(data => {
                                    if (data.modifiedCount > 0) {
                                        Swal.fire({
                                            title: "Updated!",
                                            text: "Coffee has been updated.",
                                            icon: "success"
                                        });
                                        form.reset();
                                    }
                                }).catch(err => toast.error(err.message, { theme: "colored" }))
                        }
                    });


    }
    return (
        <div>
            <div className='w-10/12 md:w-9/12 lg:w-8/12 mx-auto'>
                <h2 className='text-center font-secondary text-chocoDark mt-15 mb-4 text-4xl font-semibold'>Update Existing Coffee Details</h2>
                <p className='text-center w-full lg:w-4/5 mx-auto text-gray-600 pb-6'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                {/* coffee add form */}
                <form onSubmit={handelUpdateCoffeeForm} className=" w-full lg:w-4/5 lg:mx-auto fieldset">
                    <div className="flex flex-col lg:flex-row justify-between lg:gap-12">
                        <div className="w-full">
                            <legend className="fieldset-legend text-chocoDark text-lg mt-6">Name</legend>
                            <input defaultValue={name} required name="name" type="text" className="input w-full border-1 border-chocoLight text-chocoDark" placeholder="Enter Coffee Name" />
                            <legend className="fieldset-legend text-chocoDark text-lg mt-6">Supplier</legend>
                            <input defaultValue={supplier} required name="supplier" type="text" className="input w-full border-1 border-chocoLight text-chocoDark" placeholder="Enter Supplier Name" />
                            <legend className="fieldset-legend text-chocoDark text-lg mt-6">Coffee Category</legend>
                            <select required name="category" defaultValue={category} className="select w-full border-1 border-chocoLight text-chocoDark">
                                <option disabled={true}>Coffee Category</option>
                                <option>Cappuccino</option>
                                <option>Latte</option>
                                <option>Mocha</option>
                                <option>Espresso</option>
                                <option>Americano</option>
                            </select>
                            <legend className="fieldset-legend text-chocoDark text-lg mt-6">Coffee Photo</legend>
                            <input defaultValue={photoURL} required name="photoURL" type="text" className="input w-full border-1 border-chocoLight text-chocoDark" placeholder="Enter Coffee Photo URL" />
                        </div>
                        <div className="w-full">
                            <legend className="fieldset-legend text-chocoDark text-lg mt-6">Chef</legend>
                            <input defaultValue={chef} required name="chef" type="text" className="input w-full border-1 border-chocoLight text-chocoDark" placeholder="Enter coffee chef" />
                            <legend className="fieldset-legend text-chocoDark text-lg mt-6">Price</legend>
                            <input defaultValue={price} required name="price" type="number" className="input w-full border-1 border-chocoLight text-chocoDark" placeholder="Enter coffee price" />
                            <legend className="fieldset-legend text-chocoDark text-lg mt-6">Details</legend>
                            <input defaultValue={details} required name="details" type="text" className="input w-full border-1 border-chocoLight text-chocoDark" placeholder="Enter coffee details" />
                            <legend className="fieldset-legend text-chocoDark text-lg mt-6">Quantity</legend>
                            <input defaultValue={quantity} required name="quantity" type="number" className="input w-full border-1 border-chocoLight text-chocoDark" placeholder="Available quantity" />
                        </div>
                    </div>
                    <button className="w-full mt-6 btn border-1 border-chocoDark bg-chocoLight text-chocoDark font-secondary text-xl hover:bg-chocoDark hover:text-chocoLight duration-300">Update Coffee</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateCoffee;