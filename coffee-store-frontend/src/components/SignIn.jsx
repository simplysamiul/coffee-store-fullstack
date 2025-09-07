import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from './provider/AuthProvider';
import { toast } from 'react-toastify';

const SignIn = () => {
    const {loginUser, setLoading, loading} = useContext(AuthContext);
    const location = useLocation();
    const naviagte = useNavigate();

    const handelSignIn = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const pass = form.pass.value;

        // user login
        loginUser(email, pass)
        .then(res => {
            if(res.user){
                toast.success("User login successfully ....!", { theme: "colored" });
                form.reset();
                setLoading(false);
                naviagte(location.state ? location.state : "/");
            }
        }).catch(err => {
            setLoading(false);
            toast.error(err.message, { theme: "colored" })})
    }
    return (
        <div className="card bg-base-100 w-full mx-auto my-auto h-[50vh] lg:h-[70vh]">
            <div className="card-body flex items-center justify-center w-full">
                <form onSubmit={handelSignIn} className="fieldset w-4/5 md:w-3/5 lg:w-1/5">
                    <label className="label">Email</label>
                    <input name='email' type="email" className="input w-full" placeholder="Email" />
                    <label className="label">Password</label>
                    <input name='pass' type="password" className="input w-full" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    {loading ? <span className="loading loading-ring loading-xl text-chocoDark mx-auto"></span>
                    :<button className="btn btn-neutral mt-4 bg-chocoDark hover:bg-chocoLight border-chocoDark duration-300">Log In</button>}
                    <p className='text-center my-4 text-sm'>Dont have any account ? <Link className='text-chocoDark font-bold hover:underline' to="/signup">Create Account</Link></p>
                </form>
            </div>
        </div>
    );
};

export default SignIn;