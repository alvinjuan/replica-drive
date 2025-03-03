import firebase from 'firebase/compat/app'; // importing firebase
import "firebase/compat/auth"; // imports the authentication module from firebase

// web app firebase config
// using local environment variable names from .env.local
const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
})

// authentication instance
export const auth = app.auth()

// allows this component to easily be used and imported into other parts of the application
export default app 