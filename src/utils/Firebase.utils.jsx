import { initializeApp } from 'firebase/app'
// firebase suit of tools
//initalize app funciton creates a config object that connects our app to firebase app instance

import { 
    getAuth,
    signInWithRedirect,
    GoogleAuthProvider, 
    signInWithPopup, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged 
  } from "firebase/auth"; 
  
  import {
    getFirestore, 
    doc, //get document instance
    getDoc, //getting document data
    setDoc, // setting document data
    collection, 
    writeBatch,
    query,
    getDocs
  } from "firebase/firestore";

//Your web app's Firebase configuration 
const firebaseConfig = {
    apiKey: "AIzaSyBIUwZBM5d2vJs7nqCjBcUjVMgmpC8AJKg",
    authDomain: "clothingcommerce-db9b9.firebaseapp.com",
    projectId: "clothingcommerce-db9b9",
    storageBucket: "clothingcommerce-db9b9.firebasestorage.app",
    messagingSenderId: "1089621977592",
    appId: "1:1089621977592:web:d206ace68c82e9a539ce0d",
    measurementId: "G-0NB2FV6Z46"
  };

 //initialize firebase
const app = initializeApp(firebaseConfig); //initalizes the fire base

const googleProvider = new GoogleAuthProvider(); //initalizes the google authentication provider
googleProvider.setCustomParameters(
      {
          prompt:'select_account' //this is to autinticate via popup methods
                                  // we also have new page navigation (redirect) methods for authentiation
      }
  );

  // GoogleAuthProvider Class:
// The GoogleAuthProvider is a built-in Firebase class that helps integrate Google Sign-In with Firebase Authentication. It encapsulates all the details needed to authenticate a user with their Google account.

// Provider Object:
// The provider object created by new GoogleAuthProvider() is used to:

// Trigger the Google Sign-In flow.
// Specify any additional scopes or custom parameters required for the authentication process.

export const auth = getAuth();  //authentication object provided by firebase
// getAuth() is a function provided by the Firebase Authentication module.
// It returns an instance of the Firebase Authentication service, which allows you to perform authentication operations such as sign-ups, logins, and logouts.
//  What is auth?
// auth is a constant that stores the instance of the Firebase Authentication service returned by getAuth().
// This instance is used to call Firebase Authentication methods like signInWithEmailAndPassword(), signOut(), etc.
//Acts as the entry point for all authentication-related operations (e.g., sign-in, sign-out, user state management).


export const signInWithGooglePopup = () => signInWithPopup(auth,googleProvider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (user)=>{
    const userDocRef = doc(db,'users',user.uid) //create document reference with unique id
    //console.log(userDocRef)

    const userSnapshot = await getDoc(userDocRef) //get document reference with unique id
    //console.log(userSnapshot.exists()) // exist methods check if there is any doceumnt exist with that reference
    if(!userSnapshot.exists()){ //if user doesn't exist
        const {displayName, email} = user
        const createdAt = new Date()

        try{
            await setDoc(userDocRef,{
                displayName,
                email,
                createdAt
            })
        }
        catch(e){
            console.log(e)
        }
    }
    return userDocRef
}