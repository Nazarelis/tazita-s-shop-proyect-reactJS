import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// COMPONENTS
import Header from './components/header/Header';
// PAGES
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Utensils from './pages/Utensils';
import UtensilDetail from './pages/UtensilDetail';
import Moldes from './pages/Moldes';
import Cortadores from './pages/Cortadores';
import Boquillas from './pages/Boquillas';
import Brochas from './pages/Brochas';
import Espatulas from './pages/Espatulas';


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

                        <Route path='/moldes' element={<Moldes/>}></Route>
                        <Route path='/cortadores' element={<Cortadores/>}></Route>
                        <Route path='/boquillas' element={<Boquillas/>}></Route>
                        <Route path='/brochas' element={<Brochas/>}></Route>
                        <Route path='/espatulas' element={<Espatulas/>}></Route>

                        <Route path='/utensil-detail/:id' element={<UtensilDetail/>}/>

                    </Routes> 
                  </div>
            
            </Router>
    )
} ;

export default App;