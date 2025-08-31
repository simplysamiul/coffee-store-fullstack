import '../style/Header.css';

const Header = () => {
    return (
        <div className='header-area'>
            <div className='w-11/12 mx-auto h-full text-white flex items-center justify-end pb-15'>
                <div className='header-content w-full md:w-7/12 lg:w-6/12 '>
                    <h2 className='text-3xl md:text-4xl lg:text-6xl font-secondary mb-4'>Would you like a Cup of Delicious Coffee?</h2>
                    <p className='leading-6'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                </div>
            </div>
        </div>
    );
};

export default Header;