import React from "react";
import RestroCard from "./RestroCard";
import { useState,useEffect } from "react";

const Body = ()=>{
  const [listOfRestro,setListOfRestro] = useState([]);

  // useEffect Hook
//   useEffect(()=>{fetchData()},[]);

//   const fetchData = async ()=>{
//     const data = await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=17.362825302557773&lng=78.55158694088459&carousel=true&third_party_vendor=1");
//     const json = await data.json();
//     console.log(json);
//     setListOfRestro(json.data.cards[2].card.card);
//  } 

    return (
        <div className="body">

            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                  const filterList = listOfRestro.filter(
                    (res)=> res.resRating>2
                  );
                  setListOfRestro(filterList);
                }}>
                    Top Rated Restaurents
                </button>
            </div>

            <div className="res-container">
                 {listOfRestro.map((restaurant) => (
                    <RestroCard
                     key={restaurant.card.info.id}
                     {...restaurant}
                     />
                    ))}

            </div>
        </div>
    )
}

export default Body;