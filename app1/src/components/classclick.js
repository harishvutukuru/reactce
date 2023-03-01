import React, { Component } from 'react'

export class classclick extends Component {

    classclickcall(){
        alert('class click called');
    }
  render() {
    return (
      <div>
        <button onClick={this.classclickcall}>Button Click</button>
      </div>
    )
  }
}

export default classclick