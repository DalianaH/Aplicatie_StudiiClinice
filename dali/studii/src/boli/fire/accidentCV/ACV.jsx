import React, { useEffect, useState } from 'react';
import { db } from '../../../conectare/Conectare'
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { Boala } from '../Boala';

export const ACV = (props) => {
  const [boli, setBoli] = useState([]);
  
  const getBoli = async () => {
    try {
    const querySnapshot = await getDocs(collection(db, "/BOLI/BOLI/Biopsie de ghidare cu ultrasunete îmbunătățită cu contrast pentru diagnosticarea tumorilor hepatice (ConCLUDe)"));
      console.log("Query Snapshot:", querySnapshot);
      const listaBoli = querySnapshot.docs.map((doc) => ({
        ID: doc.id,
        ...doc.data(),
      }));
      console.log("Lista Boli:", listaBoli);
      setBoli(listaBoli);
    } catch (err) {
      //console.error(err);
    }
  };
  
  useEffect(() => {
    getBoli();
  }, []);

  return (
    <div>
      {boli.length > 0 ? (
        <Boala boli={boli} />
      ) : (
        <div>Nu sunt</div>
      )}
    </div>
  );
};
