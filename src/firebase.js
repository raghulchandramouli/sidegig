// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Optional: for Firestore
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqydCX2qxeXm-UWxJVopSwqxvuPtKnSEg",
  authDomain: "side-gig-website.firebaseapp.com",
  projectId: "side-gig-website",
  storageBucket: "side-gig-website.appspot.com",
  messagingSenderId: "126097069839",
  appId: "1:126097069839:web:e07bcc3ddf885bf44a107a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initailize Firestore:
const db = getFirestore(app);

export {db};