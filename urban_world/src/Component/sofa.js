import React from 'react';
import {connect} from 'react-redux'
import {getUsers} from '../store/actions/usersAction'
class Sofa extends  React.Component{
   

    componentDidMount(){

        // here name should 
        this.props.getUsers()
    }
 
render(){
    const {users} = this.props.users
    console.log(this.props.users)
    return(
          
        <div className='itm-sofa'>
           
        <div className=" box"   >
          
        {users.filter(item => item.name.includes('So')).map((item, idx)=>  {
             const logo = require(`${item.picture}`);
            console.log(item);
            
            return(
    
<div className=" main-card" key={idx}   index={idx} >
<div className="card-image">
<img src={logo} alt={item.name} className="card-img-top img-fix"/>
<span to="/" className="btn-floating halfway-fab waves-effect waves-light btn-danger"><i class="fas fa-plus"></i></span>
</div>
<div className="card-content">
<h5 className="card-title">{item.name}</h5>
        <p className="card-text">{item.details}</p>
        <p className="card-text"><small className="text-danger">{item.price}</small></p>
       </div> 
</div>


        ) })}
        
</div>
</div>
    )

}
}
const mapStateToProps  = (state) => ({users:state.users})

export default connect(mapStateToProps, {getUsers})(Sofa)