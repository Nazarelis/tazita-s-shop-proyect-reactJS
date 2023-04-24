import React, {useEffect, useState} from 'react'

import CardUtensils from '../components/cardUtensils/CardUtensils';
import { Link } from 'react-router-dom';

import { db } from '../firebase/firebaseConfig';
import { collection, query, getDocs, where} from "firebase/firestore";



const Cortadores = () => {

  const [cortadores, setCortadores] = useState([]);

  const q = query(collection(db, "utensils"), where("type", "==", "cortadores"));

  useEffect(() => {
    const getCortadores = async() => {
        const querySnapshot = await getDocs(q);
        const docs = [];
        querySnapshot.forEach((doc) => {

            docs.push({...doc.data(), id: doc.id})

    });     

    setCortadores(docs)
};

    getCortadores()
}, );


 
  return (
    <>
    <h1>Cortadores</h1>

    <div className='card-container'>
            
        
            {cortadores?.map(cortadores => {

            return(
             <div key={cortadores.id}>
               <Link to={ `/utensil-detail/${cortadores.id}`}>

                     <CardUtensils  data={cortadores}/>
                 </Link>
                
             </div>
            )
        }
            )}
    </div> 
    
    </>
  )
}

export default Cortadores;