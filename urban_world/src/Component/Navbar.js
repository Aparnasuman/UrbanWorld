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
const NavBaritem = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => setIsOpen(!isOpen);

    return (
     
    
       

        <Navbar color="light" light expand="md">
         <NavbarBrand href="/">UrbanWorld</NavbarBrand>
        <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
      </form>
   
        <NavbarToggler onClick={toggle} />
       
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
         
            <NavItem>
              <NavLink href="/">Pricing</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">Company</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Product
              </DropdownToggle>
            
              <DropdownMenu right>
               
                <DropdownItem>
                 Sofa Set
                </DropdownItem>
                <DropdownItem>
              Wooden Dining Table
                </DropdownItem>
                <DropdownItem  />
                <DropdownItem>
                  chair
                </DropdownItem>
                <DropdownItem>
                  Side Table
                </DropdownItem>
                <DropdownItem>
                  Stool
                </DropdownItem>
              </DropdownMenu>
             
            </UncontrolledDropdown>
          </Nav>
          <NavbarText><button className="btn rounded-pill ml-2 sign_in " >Sign in</button></NavbarText>
        </Collapse>
      </Navbar>
 
   
      
    );
  };
  
  export default NavBaritem;