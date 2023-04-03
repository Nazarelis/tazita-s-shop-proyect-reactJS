import React from "react";
import "./NavBar.css"
import img from "../navBar/logo.png"
import CartWidget from "../cartWidget/CartWidget"
import { Link } from "react-router-dom";

const NavBar = () => {
    return (

    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">

            <Link to="/"> 
            <div >
                <img src={img} alt="logo" />
                <h1 class="navbar-brand" href="#">Tazita's Shop</h1>
            </div>
            </Link>


            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <Link class="nav-link active" aria-current="page" to="/" >Inicio</Link>
                    <Link class="nav-link" to="/utensils">Utensilios</Link>
                    <Link class="nav-link" to="/about">Sobre nosotros</Link>
                    <Link class="nav-link" to="/contact">Contacto</Link>
                </div>
            </div>

            <div>
                <CartWidget/> 
            </div>
        </div>
    </nav>

    )
}


export default NavBar;

