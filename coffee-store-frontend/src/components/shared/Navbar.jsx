import headerLogo from '../../assets/more/logo1.png';
import { Link } from "react-router";
import '../../style/Navbar.css';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    return (
        <div className='navbar-area flex items-center justify-between '>
            <div className='flex-1 flex justify-center'>
                <Link to="/">
                    <div className='flex justify-center items-center space-x-4'>
                        <img className='w-[50px]' src={headerLogo} alt="Header-Logo" />
                        <h2 className='text-white font-secondary text-3xl'>Espresso Emporium</h2>
                    </div>
                </Link>
            </div>
            <div className='flex items-center  mr-6'>
                {
                    user && <div>
                        <button onClick={logOut} className='btn bg-chocoLight font-bold border-2 border-chocoDark  '>Log Out</button>
                    </div>
                }
            </div>
        </div>
    );
};

export default Navbar;