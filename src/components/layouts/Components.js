import React, { Component } from 'react'
import './styles.css'
import {Row, Col, Navbar, NavDropdown, Nav} from 'react-bootstrap'

export default class Components extends Component {
    render() {
        return (
            <Row>
                <Col sm={12}>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <NavDropdown title="Components" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#">Button</NavDropdown.Item>
                            <NavDropdown.Item href="/">Form Signin</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Grapqhl" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/list-brand">List Brand</NavDropdown.Item>
                            <NavDropdown.Item href="/countries">List Countries</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>                
                    </Navbar.Collapse>
                </Navbar>
                </Col>
                <Col sm={12}>
                    {this.props.children}
                </Col>
            </Row>
        )
    }
}
