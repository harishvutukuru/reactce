import React, { Component } from 'react'

export class welcome extends Component {
  render() {
    return (
      <div>welcome {this.props.name} .....your middle name is {this.props.middlename}</div>
    )
  }
}

export default welcome