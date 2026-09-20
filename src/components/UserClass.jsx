// This is a class based component file of User which is 
// a functional component

import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {count:0,count_2:1}
    }

    render(){
        const {name}=this.props;
        const {count,count_2} = this.state

        return (
            <div>
                <h3>This is a class based component</h3>
                <h3>count_1 = {count}</h3>

                <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1
                    })
                }}>Count Increase</button>

                <h4>count_2 = {count_2}</h4>
                <h4>Name : {name}</h4>
                <h5>Location : Deharadun</h5>
            </div>
        )
    }
};

export default UserClass;