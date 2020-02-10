import React, { Component } from 'react';
import { connect } from 'react-redux';
import Title from '../title';
import MessageList from '../messageList';
import SendMessageForm from '../sendMessageForm';
import './App.css';
import { messageFromServerInStateAC, messagesInStateAC } from '../../redux/actions';

const websocket = new WebSocket('ws://localhost:8080/');

class App extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      message: '',
    };
  }

  componentDidMount() {
    websocket.onmessage = e => {
      let res = JSON.parse(e.data);
      if (res.message) {
        this.props.messageFromServerInState(res.message);
      }
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.message !== this.props.message) {
      websocket.send(JSON.stringify(this.props.message));
    }
  }

  render() {
    return (
      <div className="outerContainer">
        <div className="container">
          <Title />
          <MessageList messages={this.props.messages} />
          <SendMessageForm />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    message: state.message,
    messages: state.messages,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    messagesInState: messages => dispatch(messagesInStateAC(messages)),
    messageFromServerInState: messageFromServer => dispatch(messageFromServerInStateAC(messageFromServer)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
