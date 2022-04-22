import React from "react";

const Jumbotron = (props) => {
    return (
        <div className="App-jumbotron">
            <div className="container-text">
                <h3 className="md-title">{props.title}</h3>
                <p>{props.content}</p>
            </div>
            <img src={props.image} />
        </div>
    );
}

export default Jumbotron;