import React, { Component } from 'react';
import Title from '../title';
import MessageList from '../messageList';
import SendMessageForm from '../sendMessageForm';
import './App.css';

const websocket = new WebSocket('ws://localhost:8080/');

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      message: 'привет сервер',
    };
  }

  componentDidMount() {
    websocket.onmessage = e => {
      let message = JSON.parse(e.data);
      console.log(`прилетело письмо с сервера: ${message.connection}`);
      // websocket.send(JSON.stringify(this.state.message));
    };
  }

  render() {
    return (
      <div className="outerContainer">
        <div className="container">
          <Title />
          <MessageList />
          <SendMessageForm />
        </div>
      </div>
    );
  }
}
