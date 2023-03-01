import React, { Component } from 'react'

export class welcome extends Component {
  render() {
    return (
      <div style={{marginleft:'100px'}}>welcome {this.props.name} .....your middle name is {this.props.middlename}</div>
    )
  }
}

export default welcome