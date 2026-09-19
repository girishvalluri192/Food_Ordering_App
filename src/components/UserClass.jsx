// This is a class based component file of User which is 
// a functional component

import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
    }
    render(){
        const {name}=this.props;
        return (
            <div>
                <h3>This is a class based component</h3>
                <h4>Name : {name}</h4>
                <h5>Location : Deharadun</h5>
            </div>
        )
    }
};

export default UserClass;