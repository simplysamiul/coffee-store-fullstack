import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './provider/AuthProvider';
import { toast } from "react-toastify";

const SignUp = () => {
  const { createUser, loading, setLoading } = useContext(AuthContext);
  const naviagte = useNavigate();

  const handelSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pass = form.pass.value;
    const name = form.name.value;
    const userInfo = { email, pass, name };

    // create user
    createUser(email, pass)
      .then(res => {
        if (res.user) {
          // save new user info in databse
          fetch("https://coffee-store-backend-seven-bay.vercel.app/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userInfo)
          })
            .then(res => res.json())
            .then(data => {
              if (data.insertedId) {
                toast.success("User createed successfully ....!", { theme: "colored" })
                form.reset();
                setLoading(false);
                naviagte(location.state ? location.state : "/");
              }
            }).catch(err => {
              setLoading(false);
              toast.error(err, { theme: "colored" })
            })
        }
      }).catch(err => {
        setLoading(false);
        toast.error(err, { theme: "colored" })
      })
  }
  return (
    <div className="card bg-base-100 w-full mx-auto my-auto h-[50vh] lg:h-[70vh]">
      <div className="card-body flex items-center justify-center w-full">
        <form onSubmit={handelSignUp} className="fieldset w-4/5 md:w-3/5 lg:w-1/5">
          <label className="label">Name</label>
          <input name="name" type="text" className="input w-full" placeholder="Name" />
          <label className="label">Email</label>
          <input name="email" type="email" className="input w-full" placeholder="Email" />
          <label className="label">Password</label>
          <input name="pass" type="password" className="input w-full" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          {loading ? <span className="loading loading-ring loading-xl text-chocoDark mx-auto"></span>
            : <button className="btn btn-neutral mt-4 bg-chocoDark hover:bg-chocoLight border-chocoDark duration-300">Create Account</button>}
          <p className='text-center my-4 text-sm'>Already have an account ? <Link className='text-chocoDark font-bold hover:underline' to="/login">Login</Link></p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;