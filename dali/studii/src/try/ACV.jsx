import React, {useEffect, useState} from 'react'
import { db, auth } from '../conectare/Conectare'
import { Produse } from './Produse';
import { collection, getDocs,setDoc, doc, updateDoc, getDoc } from 'firebase/firestore'
import { Link, useNavigate } from 'react-router-dom';
export const ACV = (props) => {
   const [produse, setProduse]=useState([]);
   const getProduse = async () => {
     try {
     const querySnapshot = await getDocs(collection(db, "PSIOM/Detalii/PrezentareGS"));
       const listaProduse = querySnapshot.forEach((doc) => {
         console.log(`${doc.id} => ${doc.data()}`);
       });
    setProduse(listaProduse);
  } catch (err) {
    console.error(err);
  }
};
  useEffect(() => {
  getProduse()
},[])
  return (
    <div>
       <br></br>
            {produse.length > 0 && (
                <div className='container-fluid'>
                    <h1 className='text-center-caini' data-heading='Boli'> Boli</h1>
                    <div className='produse-box'>
                        <Produse produse={produse} />
                    </div>
                </div>
            )}
            {produse.length < 1 && (
                <div className='container-fluid'>Produsele se incarca....</div>
            )}
    </div>
  );
};
