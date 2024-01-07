// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  connectAuthEmulator,
  signInWithEmailAndPassword
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoKI8XJT03RjEps8OVOeV4kEMvpLFc_7E",
  authDomain: "celiapp1.firebaseapp.com",
  projectId: "celiapp1",
  storageBucket: "celiapp1.appspot.com",
  messagingSenderId: "175718086075",
  appId: "1:175718086075:web:b76f98c8822c1d6df9009e",
  measurementId: "G-2RCZHGDHJL"
};

// Initialize Firebase
const auth = getAuth(firebaseApp);
connectAuthEmulator(auth, 'http://localhost:9099');

const loginEmailPassword = async () => {
  const email = txtEmail.value;
  const pass = txtPassword.value;

  signInWithEmailAndPassword(auth, loginEmail, loginPassword)
  console.log(userCredential.user);
}

btnLogin.addEventListener('click', loginEmailPassword);

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);