import React from "react";
const RestroCard = ({resName,cuisine,imgSrc,resRating})=>{

    return (
        <div className="res-card">
            <img className="card-img" src={imgSrc} alt="food_img" />
            <h3>{resName}</h3>
            <h4>{cuisine}</h4>
            <h5>{resRating}</h5>
        </div>
    )
};

export default RestroCard;