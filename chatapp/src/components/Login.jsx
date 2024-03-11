import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

function Login() {

  const [err, setErr] = useState(false);
  const navigate=useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    try {
    await  signInWithEmailAndPassword(auth, email, password);
    navigate("/");
    } catch (error) {
      console.error("Registration Error:", error);
      setErr(true);
    }
  };
  return (
    <div className="formContainer">
    <div className="formWrapper">
        <span className="logo">ChatApp</span>
        <span className="title">Login</span>
         <form onSubmit={handleSubmit}>
         <input type="email" name="email" id="email" placeholder='xyz@mail.com' />
         <input type="password" name="password" id="password" placeholder='password'/>
         <button>Log In</button>
         {err&&<span>Something went wrong!!</span>}
         </form>
         <p>Don't have an account?<Link to="/register" style={{textDecoration:"none"}}> Register</Link></p>
    </div>
</div>
  )
}

export default Login