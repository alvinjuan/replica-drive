import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap" // importing since we'll be using form, button and card from bootstrap
import { useAuth } from "../contexts/AuthContext"
import { Link } from 'react-router-dom'

export default function ForgotPassword() {
    const emailRef = useRef() 
    const { resetPassword } = useAuth() // pulling from authcontext.js
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)


    async function handleSubmit(e) { 
        e.preventDefault()

        // await will wait for the sign up to finish
        try {
            setMessage("")
            setError("")
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage("Check your inbox for further instructions")
        } catch {
            setError("Failed to reset password")
        }
        setLoading(false)
    }

    return (
        <>
            {/* creates a card like container */}
            <Card>
                {/* body of the cord where the forms and button will be in */}
                <Card.Body>
                    {/* textcenter with margin bottom: 4 */}
                    <h2 className="text-center mb-4">Password Reset</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    {message && <Alert variant="success">{message}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        {/* Form.group groups together labels and controls making it neater on the user side */}
                        {/* kinda like a div with a class container */}
                        <Form.Group id="email" className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Button disabled={loading} className="w-100" type="submit">Reset Password</Button> {/* button with width: 100 */}
                    </Form>
                    <div className = "w-100 text-center mt-3">
                        <Link to='/login' >Login</Link>
                    </div>
                </Card.Body>
            </Card>
            {/* div has width: 100, text centered and margin-top: 2 */}
            <div className = "w-100 text-center mt-2"> 
                Need an account? <Link to="/signup">Sign Up</Link>
            </div>
        </>
    )
}
