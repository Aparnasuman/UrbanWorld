import React from 'react'
class SignUp extends React.Component {
    render() {
      return(      
        <div className='signUpContainer'>
        <div className='form-group'>
          <label   for="FirstName">First Name</label>
          <input type="text" class="form-control" id="FirstName"  placeholder="First Name" required/>
           
          </div>
          <div className='form-group'>
          <label   for="LastName">Last Name</label>
          <input type="text" class="form-control" id="LastName"  placeholder="Last Name" required/>
           
          </div>
          <div className='form-group'>
          <label   for="Email">Last Name</label>
          <input type="text" class="form-control" id="email"  placeholder="Email" required/>
           
          </div>
          <div className='form-group'>
          <label   for="UserName">User Name</label>
          <input type="text" class="form-control" id="email"  placeholder="UserName" required/>
           
          </div>
          <div className="form-group ">
          <label for="Password">Password</label>
          <input type="text" class="form-control" id="password"  placeholder="Password" required/>
          
          </div>
          <div className="form-group ">
          <label className='inputLabel' for="Password">Confirm Password</label>
          <input type="passsword" class="form-control" id="password"  placeholder="Password" required/>
          
          </div>
        </div>
      )
    }
  }
  
  export default SignUp;