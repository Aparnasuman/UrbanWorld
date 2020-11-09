import React from 'react';
import Login from './login';
import SignUp from './signup';
class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }
    handleChange(button) {
        if (this.state.isOpen && button != 'login') {
            this.setState({ isOpen: false })
        } else if (!this.state.isOpen && button != 'signUp') {
            this.setState({ isOpen: true })
        }
    }
    render() {
        return (
            <div className="d-flex justify-content-center p-5 form-data">
                <div className="Login-form ">
                    <span className="btn-display"></span>
                    <button type="submit" className={this.state.isOpen ? '   btn btn-lg  btn-login' : 'btn btn-lg '} onClick={() => this.handleChange('login')}>Login</button>
                    <button type="submit" className={this.state.isOpen ? ' btn btn-lg ' : '  btn btn-lg btn-login '} onClick={() => this.handleChange('signUp')}>SignUp</button>
                    {
                        this.state.isOpen ?
                            <Login /> : <SignUp />

                    }

                </div>



            </div>
        )
    }
}

export default LoginForm;