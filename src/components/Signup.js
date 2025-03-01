import React, { useRef } from "react"
// importing since we'll be using form, button and card from bootstrap
import { Form, Button, Card } from "react-bootstrap" 

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    
    return (
        <>
            {/* creates a card like container */}
            <Card>
                {/* body of the cord where the forms and button will be in */}
                <Card.Body>
                    {/* textcenter with margin bottom: 4 */}
                    <h2 className="text-center mb-4">Sign Up</h2>
                    <Form>
                        {/* Form group groups together labels and controls making it neater on the user side */}
                        {/* kinda like a div with a class container */}
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        <Form.Group id="password-confirm">
                            <Form.Label>Password Confirmation</Form.Label> {/* label of the input form */}
                            <Form.Control type="email" ref={passwordConfirmRef} required />{/* the actual input form */}
                        </Form.Group>
                        {/* button with width: 100 */}
                        <Button className="w-100" type="submit">Sign Up</Button>
                    </Form>
                </Card.Body>
            </Card>
            {/* div has width: 100, text centered and margin-top: 2 */}
            <div className = "w-100 text-center mt-2"> 
                Alreadty have an account? Log In
            </div>
        </>
    )
}
