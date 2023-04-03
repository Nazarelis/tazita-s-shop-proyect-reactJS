import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Utensils from './pages/Utensils';
import UtensilDetail from './pages/UtensilDetail';
 

function App () {

    return (
            <Router>
                  <div className='App'>
                  <Header/>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/about' element={<About/>}/>
                        <Route path='/contact' element={<Contact/>}/>
                        <Route path='/utensils' element={<Utensils/>}/>
                        <Route path='/utensil-detail/:id' element={<UtensilDetail/>}/>
                    </Routes> 
                  </div>
            
            </Router>
    )
} ;

export default App;