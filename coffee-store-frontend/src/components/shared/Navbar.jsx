import headerLogo from '../../assets/more/logo1.png';
import '../../style/Navbar.css';

const Navbar = () => {
    return (
        <div className='navbar-area'>
            <div className='flex justify-center items-center space-x-4'>
                <img className='w-[50px]' src={headerLogo} alt="Header-Logo" />
                <h2 className='text-white font-secondary text-3xl'>Espresso Emporium</h2>
            </div>
        </div>
    );
};

export default Navbar;