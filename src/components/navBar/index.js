import React from 'react';
import { Navbar, Nav, NavItem, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./styles.css"

export default class navBar extends React.Component {
    render() {
        return(
            <Navbar default collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/"> Pan Pacific Gems </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} componentClass={Link} href="/" to="/">
                            Home
                        </NavItem>
                        <NavItem eventKey={2} componentClass={Link}  href="/products" to="/products">
                           Products
                        </NavItem>
                        <NavItem eventKey={3} componentClass={Link} href="/" to="/">
                            About Us
                        </NavItem>
                        <NavItem eventKey={4} componentClass={Link} href="/" to="/">
                            Contact Us
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}