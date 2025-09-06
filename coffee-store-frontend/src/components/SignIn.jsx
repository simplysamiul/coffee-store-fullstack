import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <div className="card bg-base-100 w-full mx-auto my-auto h-[50vh] lg:h-[70vh]">
            <div className="card-body flex items-center justify-center w-full">
                <form className="fieldset w-4/5 md:w-3/5 lg:w-1/5">
                    <label className="label">Email</label>
                    <input type="email" className="input w-full" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" className="input w-full" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4 bg-chocoDark hover:bg-chocoLight border-chocoDark duration-300">Sign Up</button>
                    <p className='text-center my-4 text-sm'>Dont have any account ? <Link className='text-chocoDark font-bold hover:underline' to="/signup">Create Account</Link></p>
                </form>
            </div>
        </div>
    );
};

export default SignIn;