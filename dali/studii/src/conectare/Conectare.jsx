import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { Link, useNavigate } from "react-router-dom";
import { getStorage } from "firebase/storage";
import "./Conectare.css";


const firebaseConfig = {
  apiKey: "AIzaSyA9FrOjOOpL7wzqI8yVALFoLctUmYNG5n0",
  authDomain: "studii-clinice.firebaseapp.com",
  databaseURL: "https://studii-clinice-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "studii-clinice",
  storageBucket: "studii-clinice.appspot.com",
  messagingSenderId: "592263855140",
  appId: "1:592263855140:web:4f28f59dd1bcc258942cb1",
  measurementId: "G-TSF27Z6T7R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export const storage = getStorage(app);


const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();
  const handleSignIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Conectare cu succes!");
        const user = userCredential.user;
        navigate("/")
        console.log("email verification: " + user.emailVerified);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + errorMessage);
      });
  };

  return (
    <form onSubmit={handleSignIn}>
      <input
        type="email"
        id="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        id="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Parola"
      />
      <button type="submit">Conectare</button>
    </form>
  );
};

export const Conectare = () => {
  return (
    <div className="conectare-container">
      <h1>Conectare</h1>
      <SignInForm />
      <div className="link-container">
        
        <Link to="/inregistrare"><div className="inreg">Înregistrare aici</div></Link>
        <Link to="/schimba-parola">Schimbă parola</Link>
      </div>
    </div>
  );
};