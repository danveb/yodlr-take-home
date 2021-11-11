import React from 'react' 
import { Link } from 'react-router-dom' 
import { Navbar, Container, Nav } from 'react-bootstrap' 

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>
                    <Nav.Link as={Link} to="/">Yodlr</Nav.Link>
                </Navbar.Brand>
            <Nav>
                <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
                <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar