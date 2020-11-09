import React from 'react';
import axios from 'axios';

import { withRouter } from "react-router-dom";
const server_host = "localhost";
const server_port = 3005
class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {},
      errors: {},
      item: this.props.itam
    }
  }
  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Name

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

        email: this.state.fields["email"],
        password: this.state.fields["password"]

      }
    };
    try {
      const fetchResponse = await axios(`http://${server_host}:${server_port}/api/public/auth/signin`, settings);
      const data = fetchResponse.data;
      console.log(fetchResponse.data);
      localStorage.setItem('document', JSON.stringify(fetchResponse.data));
      this.setState = {
        item: fetchResponse.data
      }

      this.props.history.push('./')

      return data;

    } catch (e) {
      //console.log(fetchResponse.data)
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
      <form className='login' onSubmit={this.contactSubmit.bind(this)}>

        <div className='form-group'>
          <label htmlFor="Email">Email</label>
          <input type="email" className="form-control" id="user" placeholder="Email" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"] || ''} required />
          <span style={{ color: "red" }}>{this.state.errors["email"]}</span>
        </div>
        <div className='form-group'>
          <label htmlFor="password">Password</label>
          <input type="passsword" className="form-control" id="password" placeholder="Password" onChange={this.handleChange.bind(this, "password")} value={this.state.fields["password"] || ''} required />
          <span style={{ color: "red" }}>{this.state.errors["password"]}</span>
        </div>
        <button type="submit" className="btn btn-login">LogIn</button>
      </form>
    )
  }
}

export default withRouter(Login);