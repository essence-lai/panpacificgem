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
                        <NavItem eventKey={3} componentClass={Link} href="/" to="/" onClick={()=> {
                           if(window.screen.width > 1150){
                               window.scrollTo(0,800)
                            }else if( window.screen.width <= 800){
                               window.scrollTo(0,300)
                           } else{
                            window.scrollTo(0,600)
                        }
                        }}>
                            About Us
                        </NavItem>
                        <NavItem eventKey={4} componentClass={Link} href="/" to="/"
                             onClick={()=> {
                                 if(window.screen.width > 800){
                                     window.scrollTo(0,2000)
                                 }else{
                                     window.scrollTo(0, 1200)
                                 }
                             }}
                        >
                            Contact Us
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}