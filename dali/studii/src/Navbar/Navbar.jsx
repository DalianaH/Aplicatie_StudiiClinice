import React from 'react'
import { Acasa } from './Acasa'
import {Link} from 'react-router-dom'
import {Conectare , auth, db } from '../conectare/Conectare'
import { signOut } from 'firebase/auth'
import {useAuthState} from "react-firebase-hooks/auth"
import { Cont } from '../conectare/Cont'
import { Buton } from './Buton'

export const Navbar = () => {

const [user]=useAuthState(auth);

const signUserOut=async()=>{
  await signOut(auth);
};

  return (
    <>
   
    <nav>
  <div className="menu-item">
        <Link to="/">Acasa </Link>
  </div>
  <div className="menu-item">
    <Link to="/despre">Despre</Link>
  </div>
  <div className="menu-item dropdown">
    <Link to="/servicii">Servicii</Link>
    <div className="dropdown-content">
      <a href="#">Web Design</a>
      <a href="#">Dezvoltare Web</a>
      <a href="#">Marketing Online</a>
    </div>
  </div>
  <div className="menu-item">
    <Link to='/contact'>Contact</Link>
  </div>
  
  
  {user ? (
          <div className="user"  style={{
           
    marginLeft: "auto",
    marginRight: "10px",
          }}></div>
        ) : (
           <div className='Buton'><Buton/></div> 
          
        )}
        
        {user && (
          <div className="user" >
            <button className='user-conectat' onClick={signUserOut} style={{ backgroundColor: "#110341", color: "white", height: "40px",border:"none" }}>Deconectare</button>
          </div>
        )}
</nav>
    </>
  )
}
