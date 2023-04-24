import React, {useEffect, useState} from 'react'

import CardUtensils from '../components/cardUtensils/CardUtensils';
import { Link } from 'react-router-dom';

import { db } from '../firebase/firebaseConfig';
import { collection, query, getDocs, where} from "firebase/firestore";

const Boquillas = () => {

  const [boquillas, setBoquillas] = useState([]);

  const q = query(collection(db, "utensils"), where("type", "==", "boquillas"));

  useEffect(() => {
    const getBoquillas = async() => {
        const querySnapshot = await getDocs(q);
        const docs = [];
        querySnapshot.forEach((doc) => {

            docs.push({...doc.data(), id: doc.id})

    });     

    setBoquillas(docs)
};

    getBoquillas()
}, );

 
  return (
    <>
    <h1>Boquillas</h1>

    <div className='card-container'>
            
        
            {boquillas?.map(boquillas => {

            return(
             <div key={boquillas.id}>
               <Link to={ `/utensil-detail/${boquillas.id}`}>

                     <CardUtensils  data={boquillas}/>
                 </Link>
                
             </div>
            )
        }
            )}
    </div> 
    
    </>
  )
}

export default Boquillas;