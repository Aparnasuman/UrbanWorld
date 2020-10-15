
import '../App.css';
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
    return (
     
      <div className=" jumbotron-fluid " >
        <div className="container-fluid  container">
        <div>
        <Navbar color="light" light expand="md">
        <NavbarBrand href="/">UrbanWorld</NavbarBrand>
        <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
      </form>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Pricing</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">Product</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Company
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText><button className="btn rounded-pill ml-2 sign_in ">Sign in</button></NavbarText>
        </Collapse>
      </Navbar>
    </div>
    <div className="row justify-content-center mt-5 pt-5" >
      
           <div className="  justify-content-center btn-spc">
           
              <button className="btn btn-warning rounded-pill btn-lg ">CONTACT</button>
     </div>
    
  </div>
          </div>
         
      </div>
      
    );
  };
  
  export default Header;