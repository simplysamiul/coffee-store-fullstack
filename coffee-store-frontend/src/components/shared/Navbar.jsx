import headerLogo from '../../assets/more/logo1.png';
import { Link } from "react-router";
import '../../style/Navbar.css';

const Navbar = () => {
    return (
        <div className='navbar-area'>
            <Link to="/">
                <div className='flex justify-center items-center space-x-4'>
                    <img className='w-[50px]' src={headerLogo} alt="Header-Logo" />
                    <h2 className='text-white font-secondary text-3xl'>Espresso Emporium</h2>
                </div>
            </Link>
        </div>
    );
};

export default Navbar;