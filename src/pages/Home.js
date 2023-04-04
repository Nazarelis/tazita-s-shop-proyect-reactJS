import React from 'react'
import ItemListContainer from '../components/itemListContainer/ItemListContainer'



const Home = () => {
    let name = "xxx"; 
    let greeting=`¡Bienvenida/o a Tazitas Shop, ${name}!`
  return (
    <>
    <div>
        <h1>Home</h1>
        <ItemListContainer greeting={greeting}/>
        <h2>Tu tienda ideal con todo lo que necesitas para crear tus postres</h2>
    </div>
    </>
  )
}

export default Home;