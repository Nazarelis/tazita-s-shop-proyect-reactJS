import React, { useEffect, useState } from 'react';
import CardUtensils from '../components/cardUtensils/CardUtensils';
import { Button, CircularProgress} from '@mui/material';
import './UtensilDetail.css';
import { useParams, Link } from 'react-router-dom';
import {db} from '../firebase/firebaseConfig'
import { doc, getDoc } from "firebase/firestore";
import ItemCount from '../components/itemCount/ItemCount';

//CONTEXT
import { useCartContext } from '../context/CartContext';

const UtensilDetail = ({data}) => {

   const {id} = useParams();


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


    const [goToCart,setGoToCart] = useState(false);  
    const {addProduct} = useCartContext()

    const onAdd=(quantity)=> {
      // console.log (`Compraste ${quantity} unidadades`);
      setGoToCart(true)
      addProduct(utensil, quantity);
    }

   return (
    <>
      {isLoading ? (
        <div className="loading-spinner">
          <CircularProgress />
        </div>
      ) : utensil ? (
        <div className='container-product'>
          <h1>Detalles del Producto</h1>
          
          <div className='card-container' style={{marginTop:"5%", width:"100%", display:"flex", justifyContent:"center"}} key={utensil.id}> 

          <div>
            <CardUtensils data={utensil} />
          </div>

          <div className='card-parrafo'>
            <p> {utensil.inf}</p>
          </div>
          {
            goToCart 
            ? 
            <>
            <Link to='/cart-elements'> <Button>Terminar Compra</Button></Link>
            <Link to='/'> <Button>Seguir Comprando</Button></Link>

            </>
            :<ItemCount initial={1} stock={5} onAdd={onAdd}/>
          }

            
          </div>

          
        </div>
      ) : (
        <div>No se encontraron datos</div>
      )}
    </>
  );
};

export default UtensilDetail; 