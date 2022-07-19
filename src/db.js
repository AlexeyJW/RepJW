// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, doc, getDoc} from 'firebase/firestore'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./store/auth";
import { publisher } from "./store/publisher";
import {family} from './store/family.js'
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlZor16A2aQYz856joM_UfVsOD2OmgQg4",
  authDomain: "repjw-2da88.firebaseapp.com",
  projectId: "repjw-2da88",
  storageBucket: "repjw-2da88.appspot.com",
  messagingSenderId: "1067265988791",
  appId: "1:1067265988791:web:206fd33e0473c1554cd532",
  measurementId: "G-WP1JDXCFLV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();

export const logIn=()=>{
    
    const authG = getAuth();
    signInWithPopup(authG, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log('verified',user.emailVerified)
        if (user.emailVerified) auth.set(true)
        else auth.set(false)
        // ...
        console.log(user)
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
    
    }

export const db=getFirestore(app)

//get doc
export async function getDocPublisher(){
  let obj=null;
  const docRef=doc(db, "publisher",'2022-07-10')
  const docSnap=await getDoc(docRef)
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    obj=docSnap.data();
    publisher.set(obj)
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
}

export async function getDocFamily(){
  let obj=null;
  const docRef=doc(db, "family",'2022-07-10')
  const docSnap=await getDoc(docRef)
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    obj=docSnap.data();
    family.set(obj)
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
}