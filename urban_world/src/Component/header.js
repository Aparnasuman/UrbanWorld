import React from 'react'
import NavBaritem from './Navbar'
class header extends React.Component{
  render(){
    return(
      <div className=" jumbotron-fluid " >
      <div className="container-fluid  container">
      <NavBaritem/>
      <div className="row justify-content-center mt-5 pt-5" >
      
      <div className="  justify-content-center btn-spc">
      
         <button className="btn btn-warning rounded-pill btn-lg ">CONTACT</button>
</div>
</div>
     </div>
    
 </div>
    )
  }
}

export default header;