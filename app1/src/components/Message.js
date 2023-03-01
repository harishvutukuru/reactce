import React, { Component } from 'react'

export class Message extends Component {
    constructor(){
        super()
        this.state={
msg:'Welcime hhhhh'
        }
    }

    changeMessage(){
        debugger;
        this.setState({
msg:'Thank you for subscribing'
        })
    }
  render() {
    return (
        <div>
<h1>{this.state.msg}</h1>
<button onClick={()=>this.changeMessage()}>Click</button>
        </div>
      
    )
  }
}

export default Message