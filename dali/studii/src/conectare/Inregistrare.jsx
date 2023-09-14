import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import {auth,db} from './Conectare'
import React, { useState } from "react";
import "./Inregistrare.css";

export const Inregistrare = () => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nume, setName] = useState("");
    const [telNumber, setTelNumber] = useState("");
    const [adresa, setAdresa] = useState("");
    const [localitate, setLocalitate] = useState("");
  
    const handleSignup = (e) => {
      e.preventDefault();
  
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          sendEmailVerification(auth.currentUser)
            .then(() => {
              console.log("usercredential " + userCredential.user);
              console.log("email verification: " + userCredential.user.emailVerified);
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorCode + errorMessage);
            });
  
          const user = userCredential.user;
          console.log("user id: " + user.uid);
  
          set(ref(db, "conturi/" + user.uid), {
            name: nume,
            email: email,
            password: password,
              phone: telNumber,
              adresa: adresa,
              localitate:localitate,
            
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + errorMessage);
        });
    };
  
    return (
      <form onSubmit={handleSignup}>
        <input
          type="email"
          id="userEmail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <input
          type="text"
          id="nume"
          value={nume}
          onChange={(e) => setName(e.target.value)}
          placeholder="Numele complet"
        />
        <input
          type="tel"
          id="telNumber"
          value={telNumber}
          onChange={(e) => setTelNumber(e.target.value)}
          placeholder="Numar de telefon"
        />
        <input
          type="text"
          id="adresa"
          value={adresa}
          onChange={(e) => setAdresa(e.target.value)}
          placeholder="Adresa"
        />
        <input
          type="text"
          id="localitate"
          value={localitate}
          onChange={(e) => setLocalitate(e.target.value)}
          placeholder="Localitate si judet"
        />
        <button type="submit">Inregistrare</button>
      </form>
    );
  };
  

