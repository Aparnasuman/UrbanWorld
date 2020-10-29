import React from 'react';
import {connect} from 'react-redux'
import {getUsers} from '../store/actions/usersAction'
class Section extends React.Component{
constructor(props){
    super(props);
    this.state = {
      users: [],
        collapse: false,
        showItems: 10,
        showItems1:15
      
      }
}

handleImage=()=>{
    setTimeout(() => {
        this.setState(coll=>{ 
            console.log(coll)
           return {collapse: !coll.collapse}
          })
      }, 300);
       
   

}
componentDidMount(){
  this.props.getUsers()
  const {users} = this.props.users
  console.log(this.props.users)
    this.setState({ 
        showItems:
        this.state.showItems >= users.length ?
        this.state.showItems : this.state.showItems + 1,
        showItems1:
        this.state.showItems1 >= users.length ?
        this.state.showItems1 : this.state.showItems1 + 1
       
    });
}

 render(){
  const {users} = this.props.users
     return(
         <div className="section container-fluid">
          <div className="row ">
                <div className="col text-center py-5">
                
                  <p>TOP PRODUCT</p>
                  <h1 > Custom Furniture  Store</h1>
                 <p >Buy Furniture Online from our extensive collection of wooden furniture units to give your home an elegant touch at affordable</p>
                  
                <div className="card-deck"   >
                {users.slice(5, this.state.showItems).map((item, idx)=>  {
                     const logo = require(`${item.picture}`);
                    return(
      <div className="card section-card" key={idx}   index={idx} >
    <img className="card-img-top img_0" src={logo} alt="nice" ></img>
    <div className="card-body">
     <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.details}</p>
                <p className="card-text"><small className="text-muted">{item.price}</small></p>
    </div>
  </div>
 
                ) })}
        
        
        
   
</div>
<div className={this.state.collapse?`card-deck img_show `:"card-deck img_hide"}>
{users.slice(11, this.state.showItems1).map((item, idx)=>  {
                     const logo = require(`${item.picture}`);
                    return(
      <div className="card section-card" key={idx}   index={idx} >
    <img className="card-img-top img_0" src={logo}  alt="nice"></img>
    <div className="card-body">
     <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.details}</p>
                <p className="card-text"><small className="text-muted">{item.price}</small></p>
    </div>
  </div>
 
                ) })}
        
    </div>
  
   
<button className="btn sctn rounded-pill" onClick={this.handleImage}>See All</button>
              </div>
            </div>
            

         </div>
     )
 }
}

const mapStateToProps  = (state) => ({users:state.users})

export default connect(mapStateToProps, {getUsers})(Section)