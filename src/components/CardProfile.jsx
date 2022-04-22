import React from "react";

const CardProfile = (props) => {
    return (
        <div className="profile-card" style={{backgroundColor: props.colorCard}}>
            <img src={props.image} />
            <h3>{props.name}</h3>
        </div>
    );
}

export default CardProfile;