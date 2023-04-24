import React from 'react'
import ItemListContainer from '../components/itemListContainer/ItemListContainer'
import CardList from '../components/cardList/CardList'



const Home = () => {
    let greeting=`¡Bienvenida/o a Tazitas Shop!`
  return (
    <>
    <div >
        <ItemListContainer greeting={greeting}/>
        <h2>Tu tienda ideal con todo lo que necesitas para crear tus postres</h2>
        <CardList/>
    </div>
    </>
  )
}

export default Home;