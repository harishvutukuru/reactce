import React, { Component } from 'react'

export class counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }

    counterClick(){
        // this.setState({
        //     count:this.state.count+1
        // },()=>{console.log('call back value is :' ,this.state.count)})

        this.setState((prevState)=>({
            count:prevState.count+1
        }))
        
    }

    incrementFive(){

   this.counterClick();
   this.counterClick();
   this.counterClick();
   this.counterClick();
   this.counterClick();
}
 
  render() {
    return (
      <div>
        <div>counter: {this.state.count}</div>
      <button onClick={()=>this.incrementFive()}>Click</button>
      </div>
    )
  }
}

export default counter