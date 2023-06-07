import { Component } from "react";

class ClassC extends Component{
    render(){
        return(
            <div>
             <h1> This is a class based compoinent in this i am using props </h1>
             <h1>{this.props.Cname} Components</h1>
            </div>
        )
    }
}

export default ClassC