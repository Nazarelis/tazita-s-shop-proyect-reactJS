import React, {useEffect, useState} from 'react'

import CardUtensils from '../components/cardUtensils/CardUtensils';
import { Link } from 'react-router-dom';

import { db } from '../firebase/firebaseConfig';
import { collection, query, getDocs, where} from "firebase/firestore";



const Brochas = () => {
  const [brocha, setBrocha] = useState([]);

  const q = query(collection(db, "utensils"), where("type", "==", "brochas"));

  useEffect(() => {
    const getBrocha = async() => {
        const querySnapshot = await getDocs(q);
        const docs = [];
        querySnapshot.forEach((doc) => {

            docs.push({...doc.data(), id: doc.id})

    });     

    setBrocha(docs)
};

    getBrocha()
},);

 
  return (
    <>
    <h1>Brochas</h1>

    <div className='card-container'>
            
        
            {brocha?.map(brocha => {

            return(
             <div key={brocha.id}>
               <Link to={ `/utensil-detail/${brocha.id}`}>

                     <CardUtensils  data={brocha}/>
                 </Link>
                
             </div>
            )
        }
            )}
    </div> 
    
    </>
  )
}

export default Brochas;