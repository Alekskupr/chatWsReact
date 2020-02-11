import React, { Component } from 'react';
import { connect } from 'react-redux';

import Title from '../title';
import MessageList from '../messageList';
import SendMessageForm from '../sendMessageForm';
import { messageFromServerInStateAC, messagesInStateAC } from '../../redux/actions';
import './chat.css';

const websocket = new WebSocket('ws://localhost:8080/');

class Chat extends Component {
  constructor() {
    super();
    this.state = {
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
      <div className="container">
        <Title login={this.props.login}/>
        <MessageList messages={this.props.messages} />
        <SendMessageForm />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    login: state.login,
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

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
