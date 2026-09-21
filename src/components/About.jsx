import User from "./User";
import UserClass from "./UserClass";

const About = ()=>{
    return (
        <div className="user-card">
            <h1>About Us</h1>
            <h2>This is About us page of the FOOD ORDERING Website</h2>
            <h3>This is Namaste React web series </h3>
            {/* <User name={"Akshay Saini(function)"} /> */}

            {/* Class Based component */}
            <UserClass name={"Girish Valluri "} />
        </div>
    )
};

export default About;