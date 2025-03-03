import React, { useContext, useEffect, useState } from 'react'
import { auth } from '../firebase'

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  
  // takes an email and a password
  // returns a promise
  // makes sure it works correctly when returned so we know what to do when theres an error
  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
  }

  // sets the user for us when we call the createUserWithEmailAndPassword
  // its an off on state changer
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
    })
    return unsubscribe
  }, [])
  


  const value = {
    currentUser,
    signup
  }
  
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
