import { useState } from "react";

const User = (props)=>{
    const [count]=useState(0);
    const [count_2]=useState(1);
    
    return(
        <div>
            <h1>Count = {count}</h1>
            <h1>Count_2 = {count_2}</h1>
            <h2>Name : {props.name}</h2>
            <h3>Location : "Hyderabad"</h3>
            <h4>Contact : @girishvalluri</h4>
        </div>
    );
};

export default User;