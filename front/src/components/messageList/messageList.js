import React, { Component } from 'react';
import './messageList.css';
export default class MessageList extends Component {
  

  render() {
    console.log(this.props);
    const message = this.props.messages.map((item, index) => {
      return (
        <div className = "message" key = {index}><p class = "text">{item}</p></div>
      )
    })
    return (<div className = "chatWindow">{message}</div>)
  }
}
