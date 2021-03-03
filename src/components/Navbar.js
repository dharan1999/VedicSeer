import React from 'react';
import * as ReactBootstrap from "react-bootstrap";

function navbar() {
    return (
        <div>

            <ReactBootstrap.Navbar bg="white" expand="lg" style={{marginTop:15, boxShadow:" 0px 8px 8px -6px rgba(0,0,0,.5)"}}>

                {/* <ReactBootstrap.Navbar.Brand href="#home">Home</ReactBootstrap.Navbar.Brand> */}
            
                <ReactBootstrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
                
                <ReactBootstrap.Navbar.Collapse id="basic-navbar-nav" style={{color:'black',}}>
                    <ReactBootstrap.Nav className="mr-auto">
                    
                    <ReactBootstrap.NavDropdown title="Home" id="basic-nav-dropdown" style={{marginLeft:20}}>
                        <ReactBootstrap.NavDropdown.Item href="#action/3.1">Action</ReactBootstrap.NavDropdown.Item>
                        <ReactBootstrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootstrap.NavDropdown.Item>
                        <ReactBootstrap.NavDropdown.Item href="#action/3.3">Something</ReactBootstrap.NavDropdown.Item>
                        <ReactBootstrap.NavDropdown.Divider />
                        <ReactBootstrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootstrap.NavDropdown.Item>
                    </ReactBootstrap.NavDropdown>

                    <ReactBootstrap.Nav.Link href="#home">Free Kundali</ReactBootstrap.Nav.Link>
                    
                    <ReactBootstrap.Nav.Link href="#link">Love & Marriage</ReactBootstrap.Nav.Link>
                    
                    <ReactBootstrap.Nav.Link href="#link">Career & Prosperity</ReactBootstrap.Nav.Link>
                    
                    <ReactBootstrap.NavDropdown title="Calculations" id="basic-nav-dropdown">
                        <ReactBootstrap.NavDropdown.Item href="#action/3.1">Action</ReactBootstrap.NavDropdown.Item>
                        <ReactBootstrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootstrap.NavDropdown.Item>
                        <ReactBootstrap.NavDropdown.Item href="#action/3.3">Something</ReactBootstrap.NavDropdown.Item>
                        <ReactBootstrap.NavDropdown.Divider />
                        <ReactBootstrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootstrap.NavDropdown.Item>
                    </ReactBootstrap.NavDropdown>
                    
                    <ReactBootstrap.Nav.Link href="#link">FAQ</ReactBootstrap.Nav.Link>
                    </ReactBootstrap.Nav>
                   
                    {/* <ReactBootstrap.FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
                    
                    <ReactBootstrap.Button variant="outline-warning" style={{marginRight:10,borderRadius:20,paddingLeft:15,paddingRight:15,paddingTop:3, paddingBottom:3}}>Login</ReactBootstrap.Button>
                    <ReactBootstrap.Button variant="warning" style={{marginRight:20,borderRadius:20,paddingLeft:15,paddingRight:15,paddingTop:3, paddingBottom:3}}>Sign Up</ReactBootstrap.Button>
                
                </ReactBootstrap.Navbar.Collapse>
                </ReactBootstrap.Navbar>
        </div>
    )
}

export default navbar;
