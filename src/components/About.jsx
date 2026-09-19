import User from "./User";
import UserClass from "./UserClass";

const About = ()=>{
    return (
        <div>
            <h1>About Us</h1>
            <h3>This is Namaste React web series </h3>
            <User name={"Akshay Saini(function)"} />
            <UserClass name={"Girish Valluri "} />
        </div>
    )
};

export default About;