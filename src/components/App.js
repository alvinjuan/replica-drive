import React from "react"
import Signup from "./authentication/Signup"
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Dashboard from './Dashboard'
import Login from './authentication/Login'
import PrivateRoute from "./authentication/PrivateRoute";
import ForgotPassword from "./authentication/ForgotPassword";
import UpdateProfile from "./authentication/UpdateProfile";

function App() {
  return (
    // puts the sign up form in a container so it doesnt span out all the way to the side
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>}></Route>
          <Route path="/update-profile" element={<PrivateRoute><UpdateProfile /></PrivateRoute>}></Route>
          <Route path='/signup' element={<Signup/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/forgot-password' element={<ForgotPassword/>} />
          
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App;
