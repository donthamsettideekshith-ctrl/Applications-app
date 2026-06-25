import { Component } from "react";

class TernaryOperator extends Component{
constructor(){
    super();
    this.state={
        status:true,
    };
}
 check=()=>{
        this.setState({status:!this.state.status});
    };

render(){
   

    return(
        <div>
            <h1>
               {this.state.status?'hello':'hi'}
               
            </h1>
            <button type='button' onClick={this.check}>click</button> 
        
        </div>
    );
};

}
export default TernaryOperator;