import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import Footer from "./components/Footer.jsx";

const heading = React.createElement('h1',{id:"heading"},"Online Food Ordering App");
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);

const AppComponent = ()=>(
    <div className="app">

        <Header />
        <Body />        
        <Footer />
        
    </div>
);

root.render(<AppComponent />);