import { Component } from "react"

class Second extends Component {
    constructor(){
        super();
        this.state={
            sname:"deekshith",
            sno:4,
            sphone:6281648268,
        };

    }
    render(){
  return (
    
    <div >
      <h1>welcome to the class file</h1>
      <h1>{this.state.sname},
        {this.state.sno},
        {this.state.sphone}</h1>
    </div>
  );
};
}

export default Second;