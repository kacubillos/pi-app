import React from "react";
import backImg from '../images/farm.jpeg';
import '../App.css';

const Banner = (props) => {
    return (
        <div className="App-banner" style={{backgroundImage: `url(${backImg})`}}>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <a className="App-button" href="#description">Ver más</a>
        </div>
    );
}

export default Banner;