import React from 'react';

class LoginForm extends React.Component{
render(){
    return(
        <form className="d-flex justify-content-center p-5">
        <div className="Login-form ">
        <button type="submit" class="btn btn-lg btn-login">SignUp</button> 
        <button type="submit" class="btn btn-lg btn-login">Login</button>
            <div className="form-group ">
            <label for="user">User</label>
            <input type="email" class="form-control" id="user" aria-describedby="user" placeholder="User"/>
            </div>
            <div class="form-group">
           <label for="password">Password</label>
              <input type="password" class="form-control" id="password" placeholder="Password"/>
        </div>
        <button type="submit" class="btn btn-login">Submit</button>
        </div>
        </form>
    )
}
}

export default LoginForm;