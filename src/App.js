import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';

import Footer from './components/footer/Footer'

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

 

function App () {

    return (
            <Router>
                  <div className='App'>
                  <Header/>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/about' element={<About/>}/>
                        <Route path='/contact' element={<Contact/>}/>
                    </Routes> 
                  </div>
            
            </Router>
    )
} ;

export default App;