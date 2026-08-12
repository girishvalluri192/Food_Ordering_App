import React from "react";
import RestroCard from "./RestroCard";
import { useState,useEffect } from "react";

// const resList = [
//   {
//     resName: "Kaadale Restaurant - Pure Veg",
//     cuisine: "Gongura Biriyani",
//     imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC2WO1gG_b8QJfovgJWtix0NVFeQ_whCZL2JjEtqDCIw&s=10",
//     resRating: "5"
//   },
//   {
//     resName: "Taj Mahal Hotel",
//     cuisine: "Besibeli Bath",
//     imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpamieTp5V8JIPIysk1o9CSTPH0eQqcn48-30foLI8ew&s=10",
//     resRating: "4",
//   },
//   {
//     resName: "Hotel Alpaharam",
//     cuisine: "Upma",
//     imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScHcHIRIJCZfy_Bbpb6LL_scM0kXtw_3YcMtZqb_6zEg&s=10",
//     resRating: "3",
//   },
//   {
//     resName: "Vijaya Raghavendra Tiffin center",
//     cuisine: "Poori",
//     imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhfeUvzyJspU4afBu1iZJWKUVJJ_nskkBiPgrL5J6YYw&s=10",
//     resRating: "3",
//   },
//   {
//     resName: "Raghavendra Tiffin center",
//     cuisine: "Masala Dosa",
//     imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Mq87vFqqJJe6ntF5jt8G4dAtNGw7bT5GWfY042oP6w&s=10",
//     resRating: "3",
//   },
//   {
//     resName: "Hotel Udipi veg - Pure Veg",
//     cuisine: "Bonda",
//     imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSIsI0_jvtyoHrJ6FYTUozI34znEH9f-M46xRTn0y_ZA&s=10",
//     resRating: "2",
//   },
//   {
//     resName: "Rama Krishna Hotel",
//     cuisine: "Vada",
//     imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsOwaT0P7eeKHJo8OUZx_U76jK9HyjoCWRwkdf4MEwBA&s=10",
//     resRating: "5",
//   },
//   {
//     resName: "Usha Kumari Hotel",
//     cuisine: "Boorlu",
//     imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7D859zGiOmo-3TXVgO4nvfo_iha0LGubaPNEGZ2Fc5Q&s=10",
//     resRating: "5",
//   },
//   {
//     resName: "Teja Vaishnavi Hotel",
//     cuisine: "Biriyani",
//     imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGzRJbLLNXMdTVNHFA6QZ0QZ3zrnHitCbwr2IMJGan8A&s=10",
//     resRating: "5",
//   },
//   {
//     resName: "Hanumanth Hotel",
//     cuisine: "Biriyani",
//     imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNhNfZvIrIHFpY2l_a3LSaHSQut-PKXSRagvvRJyi7CQ&s",
//     resRating: "5",
//   },
//   {
//     resName: "Green Treat",
//     cuisine: "Panner Biriyani",
//     imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjjR9_w-dKowNnaVzx8T93JnKM2K3yq9ZT6GY3c4cT8bVDGKTEfVl6tuXL&s=10",
//     resRating: "3",
//   },
//   {
//     resName: "Ram ki Bandi",
//     cuisine: "Dosas",
//     imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCHNAksaZUfBNqcBBJchNqBKwA-G2WZ6Phom8u6AqD3Q&s=10",
//     resRating: "5",
//   },
//   {
//     resName: "PullaReddy Sweets",
//     cuisine: "MilkPak",
//     imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI8isdYnvoIlvPvGwyDrHjndBVMRKZtpkQJ-H4phR68Q&s=10",
//     resRating: "2",
//   },
//   {
//     resName: "Swagruha Sweete",
//     cuisine: "Mysoore Pk",
//     imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwKQTaeUerxPbuWayIljvhV3REhZ0CCA84i_JkxSgz5g&s=10",
//     resRating: "2",
//   },
//   {
//     resName: "Delhi Mithai Wala",
//     cuisine: "Ravva Laddu",
//     imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4hCRXJKoOoqFirnlc_ABdfpaXbCIgG37_7DlzBE0v-A&s=10",
//     resRating: "1",
//   },
//   {
//     resName: "Kaadale restraunt",
//     cuisine: "Biriyani",
//     imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4hCRXJKoOoqFirnlc_ABdfpaXbCIgG37_7DlzBE0v-A&s=10",
//     resRating: "5",
//   },
//   {
//     resName: "balaji Santosh Dhabha",
//     cuisine: "Biriyani",
//     imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4pmfgWVmlsmG71kc3t6eImNOMqjiL49QoQHeKLtYfVg&s=10",
//     resRating: "5",
//   },
//   {
//     resName: "Govindas Pure veg Hotel",
//     cuisine: "Biriyani",
//     imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Gq0d5K03bqCKTjGYCyxNHx9WZY5ykpxpdLOuLnKb4w&s=10",
//     resRating: "5",
//   },
//   {
//     resName: "Hotel Udipi veg",
//     cuisine: "Biriyani",
//     imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRssxmrgQuLBG-MazWPixCt45-gXV3JmKvbyZDBOrmDA&s=10",
//     resRating: "5",
//   },
//   {
//     resName: "Veggie Chinese",
//     cuisine: "",
//     imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRssxmrgQuLBG-MazWPixCt45-gXV3JmKvbyZDBOrmDA&s=10",
//     resRating: "2",
//   },
//   {
//     resName: "Sri SaiRam Parlour",
//     cuisine: "Biriyani",
//     imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDZo-ByUjVVnu7GGA4Co5ZmWGHR2_udznlt_DQHI20bA&s=10",
//     resRating: "4",
//   },
//   {
//     resName: "Hotel Daspalla",
//     cuisine: "Biriyani",
//     imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_WIxVrPj6Q99hwXjcOKhU4vIMalAXVA7QgZHukPsDXw&s",
//     resRating: "5",
//   },
//   {
//     resName: "Hotel Novotel",
//     cuisine: "Biriyani",
//     imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSFFR8UPMRytAjnqqvzPePjtO24tRxUj5r--2wB35Svg&s=10",
//     resRating: "5",
//   }
// ];

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