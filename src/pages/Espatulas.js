import React, {useEffect, useState} from 'react'

import CardUtensils from '../components/cardUtensils/CardUtensils';
import { Link } from 'react-router-dom';

import { db } from '../firebase/firebaseConfig';
import { collection, query, getDocs, where} from "firebase/firestore";



const Espatulas = () => {

  const [espatulas, setEspatulas] = useState([]);
  const q = query(collection(db, "utensils"), where("type", "==", "espatulas"));

  useEffect(() => {
    const getEspatulas = async() => {
        const querySnapshot = await getDocs(q);
        const docs = [];
        querySnapshot.forEach((doc) => {

            docs.push({...doc.data(), id: doc.id})

    });     

    setEspatulas(docs)
};

    getEspatulas()
}, []);

  return (
    <>
    <h1>Espatulas</h1>

    <div className='card-container'>
            
        
            {espatulas?.map(espatulas => {

            return(
             <div key={espatulas.id}>
               <Link to={ `/utensil-detail/${espatulas.id}`}>

                     <CardUtensils  data={espatulas}/>
                 </Link>
                
             </div>
            )
        }
            )}
    </div> 
    
    </>
  )
}

export default Espatulas;