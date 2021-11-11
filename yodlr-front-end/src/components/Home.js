import React from 'react' 
import { Link } from 'react-router-dom'
import { Container, Nav } from 'react-bootstrap' 

const Home = () => {
    return (
        <Container className="d-flex align-items-center justify-content-center mt-4">
            <div className="w-100 text-center" style={{ maxWidth: "400px" }}>            
                <h1>Welcome to Yodlr</h1>
                <p>Nothing works and nobody knows why!</p>
                <div>
                    <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
                </div>
                <div>
                    <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
                </div> 
            </div>
        </Container>
    )
}

export default Home 