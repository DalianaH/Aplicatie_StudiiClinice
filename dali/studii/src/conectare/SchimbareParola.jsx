import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";

export const SchimbareParola = () => {
  
    const [email, setEmail] = useState("");
  
    const handleResetPassword = (e) => {
      e.preventDefault();
  
      sendPasswordResetEmail(auth, email)
        .then(() => {
          alert("Email-ul cu resetarea parolei a fost trimis cu succes!");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert("Email neidentificat");
        });
    };
  
    return (
      <form onSubmit={handleResetPassword}>
        <input
          type="email"
          id="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <button type="submit">Resetare parola</button>
      </form>
    );
  };
  

