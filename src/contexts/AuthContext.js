import React, { useContext, useEffect, useState } from 'react'
import { auth } from '../firebase'

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)
  
  // takes an email and a password
  // returns a promise
  // makes sure it works correctly when returned so we know what to do when theres an error
  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
  }

  function logout() {
    return auth.signOut()
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email)
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email)
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password)
  }

  // New function that uses verifyBeforeUpdateEmail to update the email,
  // then signs the user out and reloads the page.
  async function firebaseEmailReset(email) {
    try {
      // This sends a verification email to the new address.
      // Once the user clicks the link, the email will be updated.
      await currentUser.verifyBeforeUpdateEmail(email);
      // Sign out the user after initiating the email verification process.
      await auth.signOut();
      // Reload the window to refresh the auth state.
      window.location.reload();
    } catch (error) {
      // You can create a custom error handler or simply rethrow the error.
      throw new Error(error.message);
    }
  }

  // sets the user for us when we call the createUserWithEmailAndPassword
  // its an off on state changer
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })
    return unsubscribe
  }, [])
  


  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
    firebaseEmailReset
  }
  
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
