import React from 'react';
import axios from 'axios'
var documentData;
const server_host = "localhost";
const server_port = 3005
class HeLLo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            massg: ''
        }
    }


    componentDidMount = async () => {
        documentData = JSON.parse(localStorage.getItem('document'));
        console.log(this.documentData)


        const auth = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: documentData.auth_token


            },


        };
        try {
            const res = await axios(`http://${server_host}:${server_port}/api/user/hello`, auth);
            const data = res.data;

            console.log(res.data);
            this.setState({ massg: res.data })
            console.log(this.state.massg);
            return data;

        } catch (e) {
            console.log('error')
            console.log(e);
            return e;
        }

    }

    render() {

        return (

            <div className="hlomsg">
                <span style={{ color: "red" }}>{this.state.massg.msg}</span>


            </div>
        )
    }
}

export default HeLLo;