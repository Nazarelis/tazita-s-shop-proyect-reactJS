import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardUtensils from '../components/cardUtensils/CardUtensils';
import { useParams } from 'react-router-dom';
 

const UtensilDetail = () => {
    const [utensil, setUtensil] = useState({});
    
    let {id}=useParams();
    
    
    useEffect(() => {
        axios(`https://my-json-server.typicode.com/Nazarelis/api_reposteria/utensilios/${id}`).then(res => setUtensil(res.data))
    }, [id])


  return (
    <>
        <h1>Detalles del Producto</h1>
        <CardUtensils data={utensil}/>
    </>
  )
}

export default UtensilDetail;