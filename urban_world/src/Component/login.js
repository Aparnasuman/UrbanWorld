import React from 'react'
class Login extends React.Component {
    render() {
      return(
        <div className='login'>
        
          <div className='form-group'>
          <label   for="user">User Name</label>
          <input type="text" class="form-control" id="user"  placeholder="User" required/>
           
          </div>
          <div className='form-group'>
          <label  for="password">Password</label>
          <input type="passsword" class="form-control" id="password"  placeholder="Password" required/>
        
          </div>
          
        </div>
      )
    }
  }
  
  export default Login;