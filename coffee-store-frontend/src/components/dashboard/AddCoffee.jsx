

const AddCoffee = () => {
    const handelAddCoffeeForm = (e) => {
        e.preventDefault();
        const form = e.target;
    }
    return (
        <div>
            <div className='w-10/12 md:w-9/12 lg:w-8/12 mx-auto'>
                <h2 className='text-center font-secondary text-chocoDark mt-15 mb-4 text-4xl font-semibold'>Add New Coffee</h2>
                <p className='text-center w-full lg:w-4/5 mx-auto text-gray-600 pb-6'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                {/* coffee add form */}
                <form onSubmit={handelAddCoffeeForm} className=" w-full lg:w-4/5 lg:mx-auto fieldset">
                    <div className="flex flex-col lg:flex-row justify-between lg:gap-12">
                        <div className="w-full">
                            <legend className="fieldset-legend text-chocoDark text-lg mt-6">Name</legend>
                            <input type="text" className="input w-full border-1 border-chocoLight text-chocoDark" placeholder="Enter Coffee Name" />
                            <legend className="fieldset-legend text-chocoDark text-lg mt-6">Supplier</legend>
                            <input type="text" className="input w-full border-1 border-chocoLight text-chocoDark" placeholder="Enter Supplier Name" />
                            <legend className="fieldset-legend text-chocoDark text-lg mt-6">Browsers</legend>
                            <select defaultValue="Pick a browser" className="select w-full border-1 border-chocoLight text-chocoDark">
                                <option disabled={true}>Coffee Category</option>
                                <option>Cappuccino</option>
                                <option>Latte</option>
                                <option>Mocha</option>
                                <option>Americano</option>
                            </select>
                            <legend className="fieldset-legend text-chocoDark text-lg mt-6">Coffee Photo</legend>
                            <input type="text" className="input w-full border-1 border-chocoLight text-chocoDark" placeholder="Enter Coffee Photo URL" />
                        </div>
                        <div className="w-full">
                            <legend className="fieldset-legend text-chocoDark text-lg mt-6">Chef</legend>
                            <input type="text" className="input w-full border-1 border-chocoLight text-chocoDark" placeholder="Enter coffee chef" />
                            <legend className="fieldset-legend text-chocoDark text-lg mt-6">Taste</legend>
                            <input type="text" className="input w-full border-1 border-chocoLight text-chocoDark" placeholder="Enter coffee taste" />
                            <legend className="fieldset-legend text-chocoDark text-lg mt-6">Details</legend>
                            <input type="text" className="input w-full border-1 border-chocoLight text-chocoDark" placeholder="Enter coffee details" />
                        </div>
                    </div>
                    <button className="w-full mt-6 btn border-1 border-chocoDark bg-chocoLight text-chocoDark font-secondary text-xl hover:bg-chocoDark hover:text-chocoLight duration-300">Add Coffee</button>
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;