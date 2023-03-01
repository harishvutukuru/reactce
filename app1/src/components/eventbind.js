import React, { Component } from 'react'

export class eventbind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:"please click"
      }
      this.buttonClick=this.buttonClick.bind(this)
    }

    buttonClick(){
        this.setState({
            message:"Welcome"
        })
        }       
    
  render() {
    return (
      <div><p>{this.state.message}</p> <button onClick={this.buttonClick}>Click</button></div>
    )
  }
}

export default eventbind