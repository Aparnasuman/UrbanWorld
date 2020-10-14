import React from 'react'
import '../App.css';
const Header = (props) => {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container-fluid  container">
            <div className="navbar navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand" href="./Home">Navbar</a>
              <form className="form-inline my-2 my-lg-0">
               <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
           </form>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false\" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="./Home">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="./Home">Link</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="./Home" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="./Home">Action</a>
          <a className="dropdown-item" href="./Home">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="./Home">Something else here</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="./Home">Disabled</a>
      </li>
    </ul>
   
    </div>
            </div>
            <div className="row justify-content-center">
           <div className="col-4 mt-8">
              <h6>Urban</h6>
              <h1>UrbanWorld</h1>
              <button className="btn btn-warning rounded-pill btn-lg">CONTACT</button>
            </div>
    
  </div>
          </div>
         
      </div>
    );
  };
  
  export default Header;