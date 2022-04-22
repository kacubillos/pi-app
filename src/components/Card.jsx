import React from "react";
import '../App.css';

const Card = (props) => {
    return (
        <div className="card" style={{backgroundColor: props.colorCard}}>
            <img src={props.image} />
            <h3>{props.name}</h3>
        </div>
    );
}

export default Card;