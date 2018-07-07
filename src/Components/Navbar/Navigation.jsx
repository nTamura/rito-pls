import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faEye } from '@fortawesome/free-solid-svg-icons'

import { Navbar,
  // NavbarToggler,
  NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class Navigation extends Component {
  render() {
    return (
      <Navbar style={styles.nav} dark>
        <div className="container">
          <NavbarBrand>
            <Link to='/' className='brand' style={styles.brand}>
              Sightst<FontAwesomeIcon icon={faEye} size="xs" />ne
            </Link>
          </NavbarBrand>

          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/favorites/">
                <FontAwesomeIcon icon={faStar} />
              </NavLink>
            </NavItem>
          </Nav>
        </div>
      </Navbar>
    );
  }
}

const styles = {
  nav:{
    backgroundColor: '#0e2a40',
    marginBottom: 20
  },
}

export default Navigation;
