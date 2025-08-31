import footerLogo from '../../assets/more/logo1.png';
import { IoLogoLinkedin } from "react-icons/io5";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import '../../style/Footer.css';

const Footer = () => {
    return (
        <div className='border-t-1 border-chocoLight mt-15'>
            <div className="footer-container w-10/12 mx-auto pt-10 pb-10">
                <div className="footer-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-start lg:justify-items-center gap-6">
                    <div className="footer-left-content">
                        <img className='w-[60px] mb-2' src={footerLogo} alt="Footer-Logo" />
                        <h2 className='font-secondary text-chocoDark text-4xl my-4'>Espresso Emporium</h2>
                        <p className='my-2'>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                        <div className='flex items-start justify-start space-x-3 text-chocoDark text-2xl my-4'>
                            <i><FaFacebook /></i>
                            <i><BsTwitterX /></i>
                            <i><FaInstagram /></i>
                            <i><IoLogoLinkedin /></i>
                        </div>
                    </div>
                    {/* contact info */}
                    <div className='my-6'>
                        {/* social icon */}
                        <h3 className='text-3xl font-secondary text-chocoDark font-semibold mt-6 mb-6'>Get in Touch</h3>
                        <p className='flex items-center justify-start space-x-3 mb-2'><i className='text-lg text-chocoDark'><IoCall /></i><span>+88 01500 000 000</span></p>
                        <p className='flex items-center justify-start space-x-3 mb-2'><i className='text-lg text-chocoDark'><IoMdMail /></i><span>info@gmail.com</span></p>
                        <p className='flex items-center justify-start space-x-3 mb-2'><i className='text-lg text-chocoDark'><FaLocationDot /></i><span>72, Wall street, King Road, Dhaka</span></p>
                    </div>
                    <div className="footer-right-content w-full">
                        <h3 className='text-3xl font-secondary text-chocoDark font-semibold mb-2'>Connect with Us</h3>
                        <form onClick={(e) => e.preventDefault()} className='flex flex-col items-start justify-start'>
                            <input type="text" placeholder="Name" className="input input-ghost mb-2 w-1/2" />
                            <input type="email" placeholder="Email" className="input input-ghost mb-2 w-1/2" />
                            <textarea className="textarea textarea-ghost mb-6 w-1/2" placeholder="Bio"></textarea>
                            <button className='btn btn-outline border-chocoDark text-chocoDark font-secondary rounded-full text-lg'>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
            {/* copy right */}
            <div className='copy-right-content'>
                <p>Copyright Espresso Emporium ! All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;