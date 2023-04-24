import React, {useEffect, useState} from 'react'
import CardUtensils from '../cardUtensils/CardUtensils';
import { Link } from 'react-router-dom';
import './CardList.css'

// FIREBASE
import { db } from '../../firebase/firebaseConfig';
import { collection, query, getDocs} from "firebase/firestore";


const CardList = () => {
    const [utensils, setUtensils] = useState([]);

    const q = query(collection(db, "utensils"));

    useEffect(() => {
        const getUtensils = async() => {
            const querySnapshot = await getDocs(q);
            const docs = [];
            querySnapshot.forEach((doc) => {

               
                docs.push({...doc.data(), id: doc.id})

        });     

       
        setUtensils(docs)
    };
    
        getUtensils()
    }, []);

    return(
        <div className='card-container'>
            
                {utensils?.map(utensil => {

                return(
                 <div key={utensil.id}>
                   <Link to={ `/utensil-detail/${utensil.id}`}>

                         <CardUtensils  data={utensil}/>
                     </Link>
                    
                 </div>
                )
            }
                )}
        </div>

    );
};

export default CardList;