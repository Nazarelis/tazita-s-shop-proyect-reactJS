import React, { useEffect, useState } from 'react';
//import axios from 'axios';
import CardUtensils from '../components/cardUtensils/CardUtensils';
import { useParams } from 'react-router-dom';
import {Button} from '@mui/material';
import './UtensilDetail.css';

import {db} from '../firebase/firebaseConfig'
import { collection, query, getDocs} from "firebase/firestore";






const UtensilDetail = () => {

  //BOTONES INC Y DEC
  const [cantElements,setCantElements] = useState(0)

  function increment(){
    setCantElements(cantElements + 1)
    console.log(cantElements)
  };

  function decrement(){
    
      setCantElements(cantElements - 1)
      console.log(cantElements)
  };


// DATA
  const [utensil, setUtensil] = useState([]);
  const q = query(collection(db, "utensils"));

  useEffect(() => {
      const getUtensil = async() => {
          const querySnapshot = await getDocs(q);
          const docs = [];
          querySnapshot.forEach((doc) => {

              //console.log(doc.data());
              docs.push({...doc.data(), id: doc.id})

      });     

      //console.log(docs)
      setUtensil(docs)
  };
  
      getUtensil()
  }, []);
    
    
    // useEffect(() => {
    //     axios(`https://my-json-server.typicode.com/Nazarelis/api_reposteria/utensilios/${id}`).then(res => setUtensil(res.data))
    // }, [id])


  return (
    <>
      <h1>Detalles del Producto</h1>
      <CardUtensils data={utensil}/>

      <>
      <Button className='button' onClick={increment
      }>+</Button>
      <h3> {cantElements} </h3>
      <Button className='button' onClick={decrement}>-</Button>

      </>
    </>
  )
}

export default UtensilDetail;