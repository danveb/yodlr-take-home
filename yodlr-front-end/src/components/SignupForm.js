import React, { useState, useContext } from 'react' 
import { useNavigate } from 'react-router-dom' 
import UsersContext from '../context/UsersContext'
import { Container, Card, Form, Button } from 'react-bootstrap' 

const SignupForm = () => {
    // initialize INITIAL_STATE object that holds firstName, lastName, email, password
    const INITIAL_STATE = {
        firstName: '',
        lastName: '',
        email: '', 
    }

    // formData, setFormdata state 
    const [formData, setFormData] = useState(INITIAL_STATE)

    // useContext 
    const { handleAddUser } = useContext(UsersContext) 

    // formValidation
    const [validated, setValidated] = useState(false) 

    // useNavigate for react-router-dom v6
    const navigate = useNavigate() 

    const handleChange = (e) => {
        // destructure e.target and use name/value 
        const { name, value } = e.target 
        setFormData(formData => ({
            ...formData, 
            [name]: value 
        }))
    }

    const handleSubmit = (e) => {
        const form = e.currentTarget 
        if(form.checkValidity() === false) {
            e.preventDefault()
            e.stopPropagation() 
        } else {
            e.preventDefault()
            handleAddUser(formData)
            navigate('/')
        }
        setValidated(true) 
    }

    return (
        <>
        <Container className="d-flex align-items-center justify-content-center mt-4">
            <div className="w-100" style={{ maxWidth: "400px" }}>
                <Card>
                    <Card.Body>
                        <h1 className="text-center mb-4">Yodlr Registration</h1> 
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Form.Group className="mb-4">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control
                                    required 
                                    name="firstName"
                                    type="text" 
                                    placeholder="First Name" 
                                    value={formData.firstName}
                                    onChange={handleChange}
                                />
                                <Form.Control.Feedback type="invalid">Please enter your first name.</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-4">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control
                                    required 
                                    name="lastName"
                                    type="text" 
                                    placeholder="Last Name" 
                                    value={formData.lastName}
                                    onChange={handleChange}
                                />
                                <Form.Control.Feedback type="invalid">Please enter your last name.</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-4">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    required
                                    name="email"
                                    type="email"
                                    placeholder="name@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                <Form.Control.Feedback type="invalid">Please enter your email.</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group>
                                <Button className="w-100" type="submit">
                                    Sign Up
                                </Button>
                            </Form.Group>
                        </Form> 
                    </Card.Body>
                </Card>
            </div>
        </Container>
        </>
    )
}

export default SignupForm