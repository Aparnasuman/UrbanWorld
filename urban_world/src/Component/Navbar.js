import '../App.css';
import React, { useState } from 'react';
import SearchBar from './search'
import HeLLO from './Hlo'
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
import { Link } from 'react-router-dom';
const NavBaritem = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  var documentData = JSON.parse(localStorage.getItem('document'));

  const toggle = () => setIsOpen(!isOpen);

  return (




    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">UrbanWorld</NavbarBrand>

      <SearchBar />
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
                <Link to='/sofa'> Sofa Set</Link>
              </DropdownItem>
              <DropdownItem>
                <Link to='/table'> Wooden Dining Table</Link>
              </DropdownItem>
              <DropdownItem />
              <DropdownItem>
                <Link to='/sofa'>   chair </Link>
              </DropdownItem>
              <DropdownItem>
                <Link to='/table'>   Side Table </Link>
              </DropdownItem>
            </DropdownMenu>

          </UncontrolledDropdown>
        </Nav>
        <NavbarText><button className="btn rounded-pill ml-2 sign_in "  ><Link to='/sign' style={{ color: "#ffff" }}>Sign in</Link></button></NavbarText>
        <HeLLO />
      </Collapse>
    </Navbar>



  );
};

export default NavBaritem;