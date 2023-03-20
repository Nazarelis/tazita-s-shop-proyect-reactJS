import React from "react";
import "./NavBar.css"
import img from "../navBar/logo.png"
import CartWidget from "../cartWidget/CartWidget"


const NavBar = () => {
    return (

    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <div >
                <img src={img} alt="logo" />
                <h1 class="navbar-brand" href="#">Tazita's Shop</h1>

            </div>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-link active" aria-current="page" href="www.google.com">Inicio</a>
                    <a class="nav-link" href="www.google.com">Utensilios</a>
                    <a class="nav-link" href="www.google.com">Sobre nosotros</a>
                    <a class="nav-link" href="www.google.com">Contacto</a>
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

