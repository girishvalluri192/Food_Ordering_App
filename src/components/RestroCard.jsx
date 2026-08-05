import React from "react";
const RestroCard = (props)=>{
    const {resName,cuisine,imgSrc}=props;

    return (
        <div className="res-card">
            <img className="card-img" src={props.imgSrc} alt="food_img" />
            <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4>
            <h5>4 star rating</h5>
            <h6>36 Minutes</h6>
        </div>
    )
};

export default RestroCard;
