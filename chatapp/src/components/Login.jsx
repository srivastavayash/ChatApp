import React from 'react'

function Login() {
  return (
    <div className="formContainer">
    <div className="formWrapper">
        <span className="logo">ChatApp</span>
        <span className="title">Login</span>
         <form>
         <input type="email" name="email" id="email" placeholder='xyz@mail.com' />
         <input type="password" name="password" id="password" placeholder='password'/>
         <button>Log In</button>
         </form>
         <p>Don't have an account? Register</p>
    </div>
</div>
  )
}

export default Login