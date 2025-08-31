import propertyIcon1 from '../assets/icons/1.png';
import propertyIcon2 from '../assets/icons/2.png';
import propertyIcon3 from '../assets/icons/3.png';
import propertyIcon4 from '../assets/icons/4.png';

const Propertise = () => {
    return (
        <div className="bg-[#ECEAE3] mb-10 py-8">
            <div className="w-10/12 mx-auto">
                <div className="properties-content grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

                    <div>
                        <img className='w-[60px]' src={propertyIcon1} alt="Coffee-Cup" />
                        <h3 className='font-secondary text-3xl text-chocoDark my-2'>Awesome Aroma</h3>
                        <p>You will definitely be a fan of the design & aroma of your coffee</p>
                    </div>
                    <div>
                        <img className='w-[60px]' src={propertyIcon2} alt="Coffee-Cup" />
                        <h3 className='font-secondary text-3xl text-chocoDark my-2'>High Quality</h3>
                        <p>We served the coffee to you maintaining the best quality</p>
                    </div>
                    <div>
                        <img className='w-[60px]' src={propertyIcon3} alt="Coffee-Cup" />
                        <h3 className='font-secondary text-3xl text-chocoDark my-2'>Pure Grades</h3>
                        <p>The coffee is made of the green coffee beans which you will love</p>
                    </div>
                    <div>
                        <img className='w-[60px]' src={propertyIcon4} alt="Coffee-Cup" />
                        <h3 className='font-secondary text-3xl text-chocoDark my-2'>Proper Roasting</h3>
                        <p>Your coffee is brewed by first roasting the green coffee beans</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Propertise;