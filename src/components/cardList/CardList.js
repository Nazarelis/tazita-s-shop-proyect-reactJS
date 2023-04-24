import React, {useEffect, useState} from 'react'
// import axios from 'axios';
import CardUtensils from '../cardUtensils/CardUtensils';
import { Link } from 'react-router-dom';
import './CardList.css'

// FIREBASE
import { db } from '../../firebase/firebaseConfig';
import { collection, query, getDocs} from "firebase/firestore";

// const CardList = () => {

//     const [utensils, setUtensils] = useState([]);
//     // useEffect(() => {
//     //     axios("https://my-json-server.typicode.com/Nazarelis/api_reposteria/utensilios").then(res => setUtensils(res.data))
//     // }, [])

//   return (
//     <div className='card-container'>
        
//         {utensils.map((utensil) => {
//             return(
//                 <div key={utensil.id}>
//                     <Link to={ `/utensil-detail/${utensil.id}`}>

//                         <CardUtensils  data={utensil}/>
//                     </Link>
                    
//                 </div>
//             )
//         })}
//     </div>
//   )
// }


const CardList = () => {
    const [utensils, setUtensils] = useState([]);

    const q = query(collection(db, "utensils"));

    useEffect(() => {
        const getUtensils = async() => {
            const querySnapshot = await getDocs(q);
            const docs = [];
            querySnapshot.forEach((doc) => {

                //console.log(doc.data());
                docs.push({...doc.data(), id: doc.id})

        });     

        //console.log(docs)
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