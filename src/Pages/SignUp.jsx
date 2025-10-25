import React from 'react';
import { Link } from 'react-router';

const SignUp = () => {
    return (
        <div className='flex justify-center min-h-screen items-center'>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className='font-semibold text-2xl text-center py-5'>Create Your Account</h2>
      <div className="card-body">
        <fieldset className="fieldset">

          <label className="label">Name</label>
          <input type="text" className="input" placeholder="Name" />

            <label className="label">Image_URL</label>
          <input type="text" className="input" placeholder="Image_URL" />
            
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
 
          <button className="btn btn-neutral mt-4">SignUp</button>
          <p className='font-semibold'>Already have an account? <span className='text-secondary font-bold '><Link to="/auth/login">Login</Link></span></p>
        </fieldset>
      </div>
    </div>
    </div>
    );
};

export default SignUp;