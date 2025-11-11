import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";
import { useLocation } from "react-router";
import { useRef } from "react";

const ForgetPassword = () => {
  const emailRef = useRef();
  const location = useLocation();
  const passedEmail = location.state?.email || "";  

  const handleReset = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Please check your email for reset link!");
        window.location.href = "https://mail.google.com"; 
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
        <h2 className="font-semibold text-2xl text-center py-5">Reset Password</h2>
        <form onSubmit={handleReset} className="card-body">
          <label className="label">Email</label>
          <input
            type="email"
            ref={emailRef}
            defaultValue={passedEmail}  
            className="input"
            placeholder="Enter your email"
          />
          <button className="btn btn-neutral mt-4 w-full">Reset Password</button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
