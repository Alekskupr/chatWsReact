import React, { Component } from 'react';
import { connect } from 'react-redux';
import { messageInStateAC } from '../../redux/actions';

class SendMessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
  }

  messageForState = e => {
    this.setState({ message: e.target.value });
  };

  sendMessageInStore = e => {
    e.preventDefault();
    this.props.messageInState(this.state.message);
    this.setState({ message: '' });
  };

  render() {
    return (
      <form onSubmit={this.sendMessageInStore}>
        <input value = {this.state.message} type="text" onChange={this.messageForState} placeholder="напиши сообщение" />
        <button type="submit">отправить</button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    messageInState: message => dispatch(messageInStateAC(message)),
  };
}

export default connect(null, mapDispatchToProps)(SendMessageForm);
