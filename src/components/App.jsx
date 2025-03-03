import React from "react"
import Signup from "./Signup"
import { Container } from 'react-bootstrap'
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Dashboard from './Dashboard'
import Login from './Login'
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    // puts the sign up form in a container so it doesnt span out all the way to the side
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: '400px' }}>
        <Router>
          <AuthProvider>
            <Routes>
            <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>}></Route>
              <Route path='/signup' element={<Signup/>} />
              <Route path='/login' element={<Login/>} />
              
            </Routes>
          </AuthProvider>
        </Router>
      </div>  
    </Container>
  )
}

export default App;
