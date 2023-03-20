import React from 'react';
import './App.css';
import Header from './components/header/Header';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import Footer from './components/footer/Footer'


let name = "Anabel";

function App () {
    return (
        <>
            <div className='App'>
                <Header/>
            </div>

            <div>
                <ItemListContainer saludo={`¡Bienvenida/o a Tazitas Shop, ${name}!`}/>
            </div>
            
            <h2>Tu tienda ideal con todo lo que necesites para crear tus postres</h2>
            

            <div>
                <Footer/>
            </div>
        </>

    )
} ;

export default App;