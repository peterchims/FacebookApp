import React from 'react'
import './signup.css'

function Signup() {
    return(
        <div className="Signup">
        <div className='card'> 
            <div className="signup-header">
            <h1>  Create a new Account</h1>
            <p> It's quick and easy.</p>
            </div>
            <hr />

        <form className="right">
<input type="text" name="" placeholder="First name" required id="" />
<input type="text" name="" placeholder="Surname" required id="" />

<div className="form-row">
            <label>Date of Birth:</label>
            <div className="dob-selection">
              <select name="day" required>
                <option value="">Day</option>
                {Array.from({ length: 31 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>

              <select name="month" required>
                <option value="">Month</option>
                {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map(
                  (month, i) => (
                    <option key={i + 1} value={i + 1}>
                      {month}
                    </option>
                  )
                )}
              </select>

              <select name="year" required>
                <option value="">Year</option>
                {Array.from({ length: 100 }, (_, i) => (
                  <option key={i} value={2024 - i}>
                    {2024 - i}
                  </option>
                ))}
              </select>
            </div>
          </div>
<div className="form-row">
            <label>Gender:</label>
            <label><input type="radio" name="gender" value="male" /> Male</label>
            <label><input type="radio" name="gender" value="female" /> Female</label>
            <label><input type="radio" name="gender" value="female" /> Custom</label>
          </div>
<input type="email" name="" placeholder='Mobile number or Email Address' required id="" />
<input type="email" name="" placeholder='New password' required id="" />
        <p> People who use our service may have uploaded your contact information to Facebook. <a href="#">Learn more.</a></p>
        <p>By clicking Sign Up, you agree to our <a href="#">Terms</a>,<a href="#">Privacy Policy</a>  and <a href="#">Cookies Policy</a> . You may receive SMS notifications from us and can opt out at any time.</p>
       <button className='btn btn-create'> Sign Up</button>
       <a href="#"> Already have an account?</a>
        </form>

        </div>
        </div>
    )
}

export default Signup