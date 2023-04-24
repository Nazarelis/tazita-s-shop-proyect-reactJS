import React, { useEffect, useState } from 'react';
import CardUtensils from '../components/cardUtensils/CardUtensils';
import {Button, CircularProgress} from '@mui/material';
import './UtensilDetail.css';
import { useParams } from 'react-router-dom';
import {db} from '../firebase/firebaseConfig'
import { doc, getDoc } from "firebase/firestore";

const UtensilDetail = () => {

  //BOTONES INC Y DEC
  const [cantElements,setCantElements] = useState(0);
  const {id} = useParams();

  function increment(){
    setCantElements(cantElements + 1)
    console.log(cantElements)
  };

  function decrement(){
    if (cantElements > 0) {
      setCantElements(cantElements - 1);
      console.log(cantElements);
    } else {
      setCantElements(0);
    }
  };


  // DATA
  const [utensil, setUtensil] = useState(null);

  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const getUtensil = async () => {
      const docRef = doc(db, "utensils", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUtensil({id: docSnap.id, ...docSnap.data()});
      } else {
        console.log("No such document!");
      }
      setIsLoading(false)
    };
    getUtensil();
  }, [id]);

  //  if (!utensil) {
  //    return <div>Loading...</div>;
  //  }

   return (
    <>
      {isLoading ? (
        <div className="loading-spinner">
          <CircularProgress />
        </div>
      ) : utensil ? (
        <div style={{marginTop:"5%"}} key={utensil.id}>
          <CardUtensils data={utensil} />
        </div>
      ) : (
        <div>No se encontraron datos</div>
      )}
      <Button className='button' onClick={increment}>
        +
      </Button>
      <h3> {cantElements} </h3>
      <Button className='button' onClick={decrement} disabled={cantElements <= 0}>
        -
      </Button>
    </>
  );
};

export default UtensilDetail; 