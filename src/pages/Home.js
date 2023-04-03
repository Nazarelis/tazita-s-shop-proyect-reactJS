import React from 'react'
import ItemListContainer from '../components/itemListContainer/ItemListContainer'
import CardList from '../components/cardList/CardList';


const Home = () => {
    let name = "XX"; 
    let greeting=`¡Bienvenida/o a Tazitas Shop, ${name}!`
  return (
    <>


    <div>
        <h1>Home</h1>
        <ItemListContainer greeting={greeting}/>
        <h2>Tu tienda ideal con todo lo que necesites para crear tus postres</h2>
    </div>
    <div>
        <CardList />
    </div>


    </>
  )
}

export default Home