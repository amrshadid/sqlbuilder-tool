import * as React from 'react';
import { Container,Navbar,Nav,NavDropdown, Button } from 'react-bootstrap';
import ModalView from '../modal'




export default function Sidebar (props: ISidebarProps) {


    return (
        <>
        <Navbar fixed="top" className='navbar'>
            <Navbar.Brand className='brand'>SQLBUILDER</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-end" style={{ width: "100%" }}>
                        <ModalView title={'JSON editor'}/>
                    </Nav>
            </Navbar.Collapse>
      </Navbar>
      </>
      );
    }
