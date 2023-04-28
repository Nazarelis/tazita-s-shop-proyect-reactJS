import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// COMPONENTS
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
// PAGES
import Home from './pages/Home';
import Contact from './pages/Contact';
import UtensilDetail from './pages/UtensilDetail';
import Moldes from './pages/Moldes';
import Cortadores from './pages/Cortadores';
import Boquillas from './pages/Boquillas';
import Brochas from './pages/Brochas';
import Espatulas from './pages/Espatulas';
import Cart from './pages/Cart';
// CONTEXT
import CartProvider from './context/CartContext';






function App() {
  return (
    <>
    
    <Router>
      <CartProvider value="">
        <div className="App">

          <Header />
          <div className="content-wrap">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />

              <Route path="/moldes" element={<Moldes />} />
              <Route path="/cortadores" element={<Cortadores />} />
              <Route path="/boquillas" element={<Boquillas />} />
              <Route path="/brochas" element={<Brochas />} />
              <Route path="/espatulas" element={<Espatulas />} />

              <Route path="/utensil-detail/:id" element={<UtensilDetail />} />

              <Route path='/cart-elements' element={<Cart/>} />
            </Routes>

          </div>
          
                  
          <Footer />
        </div>


      </CartProvider>
    </Router>
    
    </>

  );
}

export default App;