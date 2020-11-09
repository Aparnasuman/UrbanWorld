import React from 'react';
import axios from 'axios';
import { withRouter } from "react-router-dom";
const server_host = "localhost";
const server_port = 3005

class LogOut extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: this.props.Item
        }
    }

    logoutClick = async (e) => {
        console.log("hi logout");



        const auth = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: this.state.data.auth_token


            },


        };
        try {
            const res = await axios(`http://${server_host}:${server_port}/api/user/logout`, auth);
            const data = res.data;

            console.log(res.data);
            this.setState.data = {
                data: null
            };
            localStorage.removeItem('document');
            this.props.history.push('./')
            return data;

        } catch (e) {
            console.log('error')
            console.log(e);
            return e;
        }
    }


    render() {
        console.log(this.props.Item)
        return (
            <button onClick={this.logoutClick}><i className="fa fa-sign-out" aria-hidden="true"></i></button>
        )
    }
}

export default withRouter(LogOut);