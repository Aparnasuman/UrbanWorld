import React from 'react';
import {connect} from 'react-redux'
import {getUsers} from '../store/actions/usersAction'
class Sofa extends  React.Component{
   

    componentDidMount(){
        this.props.getUsers()
        // here name should 
       
    }
 
render(){
    const {users} = this.props.users
    console.log(this.props.users)
    return(
       
                
        <div className="card-deck img_1"   >
        {users.filter(item => item.name.includes('T')).map((item, idx)=>  {
             const logo = require(`${item.picture}`);
            console.log(item);
            
            return(
<div className="card section-card sc-main" key={idx}   index={idx} >
<div className="card-body main-sc">
<img src={logo} alt={item.name} className="card-img-top img_pag"/>
<h5 className="card-title">{item.name}</h5>
        <p className="card-text">{item.details}</p>
        <p className="card-text"><small className="text-muted">{item.price}</small></p>
        <button className="btn rounded-pill bg-light btn-lg">{item.name}</button>
</div>
</div>

        ) })}
        
</div>
    )

}
}
const mapStateToProps  = (state) => ({users:state.users})
export default connect(mapStateToProps, {getUsers})(Sofa)