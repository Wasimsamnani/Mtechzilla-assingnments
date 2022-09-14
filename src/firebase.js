// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth ,signInWithPopup,GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1C6r-CDpOK6DrtUvHRZj199Jv16o1YeI",
  authDomain: "pomodroapp-84dd4.firebaseapp.com",
  projectId: "pomodroapp-84dd4",
  storageBucket: "pomodroapp-84dd4.appspot.com",
  messagingSenderId: "60068656882",
  appId: "1:60068656882:web:cfc28465ebacfaa8b7426b",
  measurementId: "G-2FNRM9TQVW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const Provider = new GoogleAuthProvider();

export {auth,Provider};