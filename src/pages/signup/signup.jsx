import React from 'react'
import './signup.css'
import { Link } from 'react-router-dom'; 
function Signup() {
    return(
        <>
        
        <div className="Signup">
        <h1 className='header'> Facebook</h1>
        <div className='card'> 
            <div className="signup-header">
            <h1>  Create a new account</h1>
            <p> It's quick and easy.</p>
            </div>
            <hr className='borderLine' />

        <form className="right">
            <div className="input-group">
            <input type="text" name="" placeholder="First name" required id="" />
<input type="text" name="" placeholder="Surname" required id="" />

            </div>

<div className="DOB">
            <label>Date of Birth:</label>
            <div className="dob-selection">
              <select name="day" className='month'  required>
                <option value="">Day</option>
                {Array.from({ length: 31 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>

              <select name="month" className='month' required>
                <option value="">Month</option>
                {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map(
                  (month, i) => (
                    <option key={i + 1} value={i + 1}>
                      {month}
                    </option>
                  )
                )}
              </select>

              <select name="year" className='month' required>
                <option value="">Year</option>
                {Array.from({ length: 100 }, (_, i) => (
                  <option key={i} value={2024 - i}>
                    {2024 - i}
                  </option>
                ))}
              </select>
            </div>
          </div>
<div className="gender">
            <label>Gender:</label>
            <div className="gender-values">
            <label><input type="radio" name="gender" value="male" /> Male</label>
            <label><input type="radio" name="gender" value="female" /> Female</label>
            <label><input type="radio" name="gender" value="female" /> Custom</label>
            </div>
          </div>
          <div className="sensitive-data">
          <input type="email" name="" placeholder='Mobile number or Email Address' required id="" />
          <input type="password" name="" placeholder='New password' required id="" />
          </div>
          <div className="text-content">
          <p className='p1'> People who use our service may have uploaded your contact information to Facebook. <a href="#">Learn more.</a></p>
          <p className='p2'>By clicking Sign Up, you agree to our <a href="#">Terms</a>,<a href="#">Privacy Policy</a>  and <a href="#">Cookies Policy</a>. </p>
          <p className='p3'>You may receive SMS notifications from us and can opt out at any time.</p>
          </div>
        <div className="signup-footer">
        <button className='btn btn-create btn-sign'> Sign Up</button>
        <Link to='/login' className='login-click'>
        <a href="#" className='login-account'> Already have an account?</a>
        </Link>
        
        </div>
    
        </form>

        </div>
        </div>
        </>
    )
}

export default Signup