import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import { Acasa } from './Navbar/Acasa';
import { Navbar } from './Navbar/Navbar';
import {Conectare} from './conectare/Conectare'
import { Inregistrare } from './conectare/Inregistrare';
import { SchimbareParola } from './conectare/SchimbareParola';
import { Cont } from './conectare/Cont';
import { Contact } from './Navbar/Contact';
import { Despre } from './Navbar/Despre';
import { Servicii } from './Navbar/Servicii';

function App() {

  return (
    <>
  
<Router>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Acasa/>}></Route>
    <Route path='/conectare' element={<Conectare/>}></Route>
    <Route path='/inregistrare' element={<Inregistrare/>}></Route>
    <Route path='/schimba-parola' element={<SchimbareParola/>}></Route>
    <Route path='/cont' element={<Cont/>}></Route>
    <Route path='/contact' element={<Contact />} />
    <Route path='/despre' element={<Despre/>}/>
    <Route path='/servicii' element={<Servicii/>}/>
    


  </Routes>
      </Router>
    </>
  )
}

export default App
