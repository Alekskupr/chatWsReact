import React, { Component } from 'react';
import { connect } from 'react-redux';
import { messageInStateAC } from '../../redux/actions';
import './sendMessageForm.css';
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
      <form className="form" onSubmit={this.sendMessageInStore}>
        <input
          className="typeMessage"
          value={this.state.message}
          type="text"
          onChange={this.messageForState}
          placeholder="Введите текст"
        />
        <button type="submit">></button>
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
