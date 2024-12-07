// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1pTDi0iE7hDN_Qf8X-9xEqFptokTsNko",
  authDomain: "netflixgpt-bd714.firebaseapp.com",
  projectId: "netflixgpt-bd714",
  storageBucket: "netflixgpt-bd714.appspot.com",
  messagingSenderId: "574069046062",
  appId: "1:574069046062:web:f9236a0bf6a48bc56d58bf",
  measurementId: "G-VLFZ170FCQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();