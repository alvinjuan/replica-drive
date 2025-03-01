import React from "react"
import Signup from "./Signup"
import { Container } from 'react-bootstrap'

function App() {
  return (
    /* puts the sign up form in a container so it doesnt span out all the way to the side */
    <Container 
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: '400px' }}>
        <Signup />
      </div>  
    </Container>
  )
}

export default App;
