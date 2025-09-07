import React from 'react';

const CoffeeDetails = ({coffeeDetails}) => {
    console.log(coffeeDetails)
    return (
        <dialog id="coffeeDetails" className="modal">
            <div className="modal-box flex flex-col items-center justify-between">
                {/* coffee img */}
                <div>
                    <img src={coffeeDetails.photoURL} alt={`${coffeeDetails.name}-Img`} />
                </div>

                {/* coffee details */}
                <div>
                    <div className="md:text-sm lg:text-lg mx-4">
                        {/* <p className="md:mb-1 xl:mb-2"><span className='text-chocoDark font-bold'>Name : </span>{coffeeDetails[0].name}</p>
                                <p className="md:mb-1 xl:mb-2"><span className='text-chocoDark font-bold'>Chef : </span>{coffeeDetails[0].chef}</p>
                                <p className="md:mb-1 xl:mb-2"><span className='text-chocoDark font-bold'>Price : </span>{coffeeDetails[0].price}</p>
                                <p className="md:mb-1 xl:mb-2"><span className='text-chocoDark font-bold'>Category : </span>{coffeeDetails[0].category}</p>
                                <p className="md:mb-1 xl:mb-2"><span className='text-chocoDark font-bold'>Supplier : </span>{coffeeDetails[0].supplier}</p>
                                <p className="md:mb-1 xl:mb-2"><span className='text-chocoDark font-bold'>Quantity : </span>{coffeeDetails[0].quantity}</p>
                                <p className="md:mb-1 xl:mb-2"><span className='text-chocoDark font-bold'>Details : </span>{coffeeDetails[0].details}</p> */}
                    </div>
                    {/* modal close button */}
                    <form method="dialog" className="text-center my-4">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn bg-chocoDark font-secondary text-lg text-white tracking-widest border-chocoLight">Close</button>
                    </form>
                </div>
            </div>
        </dialog>
    );
};

export default CoffeeDetails;