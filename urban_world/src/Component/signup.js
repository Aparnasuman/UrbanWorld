import React from 'react';
import axios from 'axios'
const server_host = "localhost";
const server_port = 3005

class SignUp extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      fields: {},
      errors: {}
    }
  }

  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Name
    if (!fields["firstName"]) {
      formIsValid = false;
      errors["firstName"] = "Cannot be empty";
    }

    if (typeof fields["firstName"] !== "undefined") {
      if (!fields["firstName"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["firstName"] = "Only letters";
      }
    }
    if (!fields["lastName"]) {
      formIsValid = false;
      errors["lastName"] = "Cannot be empty";
    }

    if (typeof fields["lastname"] !== "undefined") {
      if (!fields["lastName"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["lastname"] = "Only letters";
      }
    }
    //Email
    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Cannot be empty";
    }

    if (typeof fields["email"] !== "undefined") {
      let lastAtPos = fields["email"].lastIndexOf('@');
      let lastDotPos = fields["email"].lastIndexOf('.');

      if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
    }
    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "Please enter your password.";
    }

    if (!fields["confirm_password"]) {
      formIsValid = false;
      errors["confirm_password"] = "Please enter your confirm password.";
    }

    if (typeof fields["password"] !== "undefined" && typeof fields["confirm_password"] !== "undefined") {

      if (fields["password"] !== fields["confirm_password"]) {
        formIsValid = false;
        errors["password"] = "Passwords don't match.";
      }
    }
    this.setState({ errors: errors });
    return formIsValid;
  }
  contactSubmit = async (e) => {
    e.preventDefault();

    if (this.handleValidation()) {
      console.log(this.state.fields);
    } else {
      console.log("form does not support");
    }


    const settings = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
        // Origin: `http://${server_host}:${server_port}/`,

      },
      data: {
        firstName: this.state.fields["firstName"],
        lastName: this.state.fields["lastName"],
        email: this.state.fields["email"],
        password: this.state.fields["password"]

      }
    };
    try {
      const fetchResponse = await axios(`http://${server_host}:${server_port}/api/public/auth/signup`, settings);
      const data = fetchResponse.data;

      console.log(fetchResponse.data);

      return data;
    } catch (e) {
      console.log('error')
      console.log(e);
      return e;
    }
  }

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }
  render() {

    return (
      <form className='signUpContainer' onSubmit={this.contactSubmit.bind(this)}>
        <div className='form-group'>
          <label htmlFor="FirstName">First Name</label>
          <input type="text" refs="firstName" className="form-control" id="FirstName" onChange={this.handleChange.bind(this, "firstName")} value={this.state.fields["firstName"] || ''} placeholder="First Name" required />
          <span style={{ color: "red" }}>{this.state.errors["firstname"]}</span>
        </div>
        <div className='form-group'>
          <label htmlFor="LastName">Last Name</label>
          <input type="text" refs="lastname" className="form-control" id="LastName" onChange={this.handleChange.bind(this, "lastName")} value={this.state.fields["lastName"] || ''} placeholder="Last Name" required />
          <span style={{ color: "red" }}>{this.state.errors["lastname"]}</span>
        </div>
        <div className='form-group'>
          <label htmlFor="Email">Email</label>
          <input type="text" refs="email" className="form-control" id="Email" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"] || ''} placeholder="Email" required />
          <span style={{ color: "red" }}>{this.state.errors["email"]}</span>

        </div>

        <div className="form-group ">
          <label htmlFor="Password">Password</label>
          <input type="password" refs="password" className="form-control" id="password" onChange={this.handleChange.bind(this, "password")} value={this.state.fields["password"] || ''} placeholder="Password" required />
          <span style={{ color: "red" }}>{this.state.errors["password"]}</span>
        </div>
        <div className="form-group ">
          <label className='inputLabel' htmlFor="confirm_Password">Confirm Password</label>
          <input type="password" refs="cnfpassword" className="form-control" id="confirm_Password" onChange={this.handleChange.bind(this, "confirm_password")} value={this.state.fields["confirm_password"] || ''} placeholder="Password" required />
          <span style={{ color: "red" }}>{this.state.errors["confirm_password"]}</span>
        </div>
        <button type="submit" className="btn btn-login">SignUp</button>
      </form>
    )
  }
}

export default SignUp;