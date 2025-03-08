import React from "react"
import Signup from "./authentication/Signup"
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Profile from './authentication/Profile'
import Login from './authentication/Login'
import PrivateRoute from "./authentication/PrivateRoute";
import ForgotPassword from "./authentication/ForgotPassword";
import UpdateProfile from "./authentication/UpdateProfile";
import Dashboard from "./google-drive/Dashboard";

function App() {
  return (
    // puts the sign up form in a container so it doesnt span out all the way to the side
    <Router>
      <AuthProvider>
        <Routes>
          {/* Drive */}
          <Route exact path='/' element={<PrivateRoute><Dashboard /></PrivateRoute>}></Route>

          {/* Profile */}
          <Route path="/user" element={<PrivateRoute><Profile /></PrivateRoute>}></Route>
          <Route path="/update-profile" element={<PrivateRoute><UpdateProfile /></PrivateRoute>}></Route>

          {/* Auth */}
          <Route path='/signup' element={<Signup/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/forgot-password' element={<ForgotPassword/>} />
          
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App;
