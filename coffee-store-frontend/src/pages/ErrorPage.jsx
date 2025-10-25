import { Link } from 'react-router-dom';
import errorImg from '../assets/404/404.gif'
import { FaArrowRightLong } from 'react-icons/fa6';

const ErrorPage = () => {
    return (
        <div className='h-[90vh] flex flex-col items-center justify-center'>
            <img src={errorImg} alt="" />
            <Link className='text-center text-chocoDark text-lg font-bold hover:underline flex items-center justify-center' to="/">Back To Home page <FaArrowRightLong className='mt-1 ml-4' /></Link>
        </div>
    );
};

export default ErrorPage;