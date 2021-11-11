import React, { useContext } from 'react'
import UsersContext from '../context/UsersContext'
import { Container, Card, Row, Col, Button } from 'react-bootstrap'

const Admin = () => {
    const { users, handleUpdateUser, handleDeleteUser } = useContext(UsersContext)

    const handleActivate = (id) => {
        const user = users.filter((user) => user.id === id);
        handleUpdateUser(user[0])
    }

    const handleDelete = (id) => {
        const user = users.filter((user) => user.id === id);
        handleDeleteUser(user[0])
    }

    return (
        <Container className="d-flex align-items-center justify-content-center mt-4"> 
            <Row>
                <h1 className="text-center mb-4">Users</h1> 
                { users.map((user) =>
                    <Col key={user.id} md={4}>
                        <Card className="mt-4 text-center">
                            <Card.Body>
                                <Card.Title>{user.firstName} {user.lastName}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">state: {user.state}</Card.Subtitle>
                                <Card.Text>
                                    {user.email}
                                </Card.Text>
                                <Button 
                                    className="mx-1" 
                                    variant="success" 
                                    size="sm" 
                                    hidden={user.state === "active"} 
                                    onClick={() => handleActivate(user.id)}>
                                    Activate
                                </Button>
                                <Button 
                                    variant="danger" 
                                    size="sm" 
                                    onClick={() => handleDelete(user.id)}>
                                    Delete
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ) }
            </Row>
        </Container>
    )
} 

export default Admin