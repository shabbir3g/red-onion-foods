import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo2.png';

const Header = () => {
    const {user, logOut} = useAuth();
    



    return (

    
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          { console.log(user)}
        <Container>
        <Navbar.Brand as={Link} to="/"><img height="43" src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">

            {!user.email? 
           <> 
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/register"><Button className="rounded-pill" variant="danger">Sign Up</Button></Nav.Link>

           </> : 
         <> 
          <Nav.Link as={Link} to="/">{user.displayName || user.email}</Nav.Link>
          <Button onClick={logOut} className="rounded-pill" variant="danger">Log Out</Button>
         </>
          
          }
           
           
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;