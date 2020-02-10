import React, { Component } from 'react';
import Title from '../title';
import MessageList from '../messageList';
import SendMessageForm from '../sendMessageForm';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = { messages: [], message: '' };
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
