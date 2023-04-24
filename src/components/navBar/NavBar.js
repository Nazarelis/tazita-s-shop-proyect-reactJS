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


            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-link active" aria-current="page" to="/" >Inicio</Link>
                    {/* <Link className="nav-link" to="/utensils">Utensilios</Link> */}
                    <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" to="/utensils">Categorias</Link>
                    <ul className="dropdown-menu">
                        <Link a class="dropdown-item" to="/cortadores">Cortadores</Link>
                        <Link a class="dropdown-item" to="/moldes">Moldes</Link>
                        <Link a class="dropdown-item" to="/brochas">Brochas</Link>
                        <Link a class="dropdown-item" to="/boquillas">Boquillas</Link>
                        <Link a class="dropdown-item" to="/espatulas">Espatulas</Link>
                    </ul>

                    </li>


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

