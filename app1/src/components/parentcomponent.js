import React, { Component } from 'react'

export class parentcomponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentname:"Parent"
      }
    }
    greetparent(){
        alert(`hello ${this.state.parentname}`)
    }
  render() {
    return (
      <div>parentcomponent</div>
    )
  }
}

export default parentcomponent