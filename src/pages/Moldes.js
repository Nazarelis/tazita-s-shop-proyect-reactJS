import React, {useEffect, useState} from 'react'

import CardUtensils from '../components/cardUtensils/CardUtensils';
import { Link } from 'react-router-dom';

import { db } from '../firebase/firebaseConfig';
import { collection, query, getDocs, where} from "firebase/firestore";

const Moldes = () => {

    const [molde, setMolde] = useState([]);

    const q = query(collection(db, "utensils"), where("type", "==", "moldes"));

    useEffect(() => {
        const getMolde = async() => {
            const querySnapshot = await getDocs(q);
            const docs = [];
            querySnapshot.forEach((doc) => {

                docs.push({...doc.data(), id: doc.id})

        });     

        setMolde(docs)
    };
    
        getMolde()
    }, []);


    return(
        <>
        <h1>Moldes</h1>

        <div className='card-container'>
                
            
                {molde?.map(molde => {

                return(
                 <div key={molde.id}>
                   <Link to={ `/utensil-detail/${molde.id}`}>

                         <CardUtensils  data={molde}/>
                     </Link>
                    
                 </div>
                )
            }
                )}
        </div> 
        
        </>


    );
  };

export default Moldes;