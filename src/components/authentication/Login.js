import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap" // importing since we'll be using form, button and card from bootstrap
import { useAuth } from "../../contexts/AuthContext"
import { Link, useNavigate } from 'react-router-dom'
import CenteredContainer from "./CenteredContainer"

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth() // pulling from authcontext.js
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()


    async function handleSubmit(e) { 
        e.preventDefault()

        // await will wait for the sign up to finish
        try {
            setError('')
            setLoading(true)
            // passing in the email and password value
            await login(emailRef.current.value, passwordRef.current.value)
            navigate('/')
        } catch {
            setError('Failed to sign in')
        }
        setLoading(false)
        // setLoading prevents users from clicking the sign up button multiple times and accidentally creating multiple accounts

    }

    return (
        <CenteredContainer>
            {/* creates a card like container */}
            <Card>
                {/* body of the cord where the forms and button will be in */}
                <Card.Body>
                    {/* textcenter with margin bottom: 4 */}
                    <h2 className="text-center mb-4">Log In</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        {/* Form group groups together labels and controls making it neater on the user side */}
                        {/* kinda like a div with a class container */}
                        <Form.Group id="email" className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password" className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        <Button disabled={loading} className="w-100" type="submit">Log In</Button> {/* button with width: 100 */}
                    </Form>
                    <div className = "w-100 text-center mt-3">
                        <Link to='/forgot-password'>Forgot Password?</Link>
                    </div>
                </Card.Body>
            </Card>
            {/* div has width: 100, text centered and margin-top: 2 */}
            <div className = "w-100 text-center mt-2"> 
                Need an account? <Link to='/signup'>Sign Up</Link>
            </div>
        </CenteredContainer>
    )
}
