import { Component } from "react";

class ConditionalComponents extends Component{
    constructor(){
    super();
    this.state={
        status:"i love u",
    };
    }
    render(){
        if(this.state.status){
            return(
                <div>
                <p>i love u too</p>
                </div>
            );
        }else{
            return(
                <div>
                <h1>i hate u</h1>
                </div>
            );
        }
       
    };

}


export default ConditionalComponents;