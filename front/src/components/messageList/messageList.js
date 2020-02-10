import React, { Component } from 'react';

export default class MessageList extends Component {
  

  render() {
    console.log(this.props);
    const message = this.props.messages.map((item, index) => {
      return (
        <li key = {index}>{item}</li>
      )
    })
    return <ul>{message}</ul>
  }
}
