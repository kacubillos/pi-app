import React from "react";
import '../App.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><a href="#header">Inicio</a></li>
                <li><a href="#tools">Herramientas</a></li>
                <li><a href="#members">Integrantes</a></li>
                <li><a href="#">Objetivos</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;