import React, { Component } from 'react'
import Childcomponent from './childcomponent'
export class parentcomponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentname:"Prasad"
      }
      this.greetparent=this.greetparent.bind(this);
    }
    greetparent(childname){
        debugger;
        alert(`hello ${this.state.parentname}...this is your child ${childname}`)
    }
  render() {
    return (
      <div> 
        {/* <button onClick={this.greetparent}>click</button> */}
       <Childcomponent greetHandler={this.greetparent}></Childcomponent>
      </div>
    )
  }
}

export default parentcomponent