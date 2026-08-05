import React from "react";
import RestroCard from "./RestroCard"

const Body = ()=>{
    return (
        <div className="body">
            <div className="search"></div>
            <div className="res-container">
                
             <RestroCard resName="Kaadale Reataurent" cuisine="Berger" imgSrc="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_720,h_420,c_fill/fgcavdtgkvcspffa7nm1" />
             <RestroCard resName="Balaji Santosh Dhaba" cuisine="Gongura Biriyani" imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSddSOwN65QG9V70fcGUhusvH5aamwLlSNlbf_bQ1lOcg&s=10"/>
             <RestroCard resName="Taj Mahal Hotel" cuisine="Biriyani" imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsb-jXW0334SORt5Mo-znS2oS2Rp8dLQJfSUYRL3-QOA&s"/>
             <RestroCard resName="Govindas Restraunt" cuisine="Veg Biriyani" imgSrc="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_720,h_420,c_fill/f3164f28ab1b3e372ece4927d50d1b72" />
             <RestroCard resName="Gokul Tiffin center" cuisine="Tawa Masala Pulao" imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP7rLRWhgoluUJfcL8oKjO2IIJ6k7-JOql579AhWqopezXJ0Ld6WqROdo8&s=10"/>
             <RestroCard resName="Ashtalakshmi Tiffin center" cuisine="Poori" imgSrc="https://t4.ftcdn.net/jpg/01/43/49/27/360_F_143492736_QgCfB0XKHtZpfGlIb1hr3M6mGCepcDVs.jpg" />
                           {/* <RestroCard resName="" cuisine="" imgSrc="" /> */}
             <RestroCard resName="Hotel Godavari" cuisine="" imgSrc="https://b.zmtcdn.com/data/pictures/3/17977903/e1c47b60653bd71c1a2001494deb85bd.jpg" />
             <RestroCard resName="Raghavendra Tiffin center" cuisine="" imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6Zz5udokCdrWqgWs5joeTW8rIXRxm4wC6pSbH4yop-zLGcGrvVI0q47Eo&s=10" />
             <RestroCard resName="Udipi Pure veg tiffin center" cuisine="" imgSrc="https://images.jdmagicbox.com/v2/comp/coorg/h3/9999p8272.8272.230304095647.u3h3/catalogue/paakashala-kohinoor-road-coorg-restaurants-e6o5c5d065.jpg" />
            {/* <RestroCard resData={resObj} /> */}

            </div>
        </div>
    )
}

export default Body;