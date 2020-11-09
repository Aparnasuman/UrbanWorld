import React from 'react';
import {connect} from 'react-redux'
import {getUsers} from '../store/actions/usersAction'

class Section1 extends  React.Component{
    constructor(props){
        super(props);
        this.state = {
         
            showItems: 14,
            showItem:11
             }
        }

    componentDidMount(){
      
        // here name should 
        this.props.getUsers()
      
    }
 
render(){
    const {users} = this.props.users
    console.log(this.props.users)
    return(
        <div className="imag-group grp">
        <div className="card-deck img_1"   >
        {users.slice(12, this.state.showItems).map((item, idx)=>  {
             const logo = require(`${item.picture}`);
            return(
<div className="card section-card sc-main" key={idx}   index={idx} >
<img className="card-img-top  imgsc" src={logo} alt="nice" ></img>
<div className="card-body main-sc">
<h5 className="card-title">{item.name}</h5>
        <p className="card-text">{item.details}</p>
        <p className="card-text"><small className="text-muted">{item.price}</small></p>
        <button className="btn rounded-pill bg-light btn-lg">{item.name}</button>
</div>
</div>

        ) })}
        
</div>


</div>

    )
}
}

const mapStateToProps  = (state) => ({users:state.users})

export default connect(mapStateToProps, {getUsers})(Section1)