import React from 'react'
import './login.css'

function Login() {
    return(
        <div className="login">
        <div className='card'> 
        <div className="left">
            <h2>facebook</h2>
            <p> Connect with friends and the world around you on facebook.</p>
       
        </div>
        <form className="right">
<input type="text" name="" placeholder="Email or Phone number" required id="" />
<input type="password" name="" placeholder='Password' required id="" />
<button type="submit" className='btn login-btn'>Login</button>
<a href="#">Forget Password?</a>
<button type="submit" className='btn btn-create'> Create Account</button>
        </form>

        </div>
        </div>
    )
}

export default Login
