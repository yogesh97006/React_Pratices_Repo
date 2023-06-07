import { Component } from "react";

class ClassS extends Component{
   
    constructor(){
        super()
        this.state={
            Data:'Yogesh'
        }
    }
     

    render(){
        return(
            <div>
                 <h1>this is a class components and in thuis i am using props and state </h1>
                   {this.props.Name}
                   {this.state.Data}
            </div>
        )
    }
}

export default ClassS