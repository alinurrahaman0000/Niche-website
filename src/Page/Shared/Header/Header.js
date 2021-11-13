import React from 'react';
import {  Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
import { Box } from '@mui/system';

const Header = () => {
  const {user,logout}= useAuth()
    return (
   <>
  <Navbar bg="dark" sticky="top" collapseOnSelect expand="lg" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Honda Bike</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
      <Nav.Link as={HashLink} to="/home#products">Explore</Nav.Link>
      <Nav.Link as={HashLink} to="/review">Review</Nav.Link>

     
      {/* {Admin && <Box>
        <Nav.Link as={HashLink} to="/namageProduct">ManageProduct</Nav.Link>
      <Nav.Link as={HashLink} to="/addProduct"> Add Products</Nav.Link>
        </Box>} */}
     
      <Nav.Link as={HashLink} to="/about"> About</Nav.Link>
      <Nav.Link as={HashLink} to="/home#delivary">Delivary</Nav.Link>
      {/* <Nav.Link as={HashLink} to="/dashboard">Dashboard</Nav.Link> */}
      {  user?.email?
        <Box>
            <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
            <Button onClick={logout} variant="light">Logout</Button>
        </Box>
      
      :
      <Nav.Link as={Link} to="/login">Login</Nav.Link>
      }
      <Navbar.Text>
        Signed in as: <a href="#login">{user?.displayName}</a>
      </Navbar.Text>
    </Navbar.Collapse>
    <Nav className="me-auto">
        </Nav>
    </Container>
  </Navbar>
  <br />
 

        </>
    );
};

export default Header;