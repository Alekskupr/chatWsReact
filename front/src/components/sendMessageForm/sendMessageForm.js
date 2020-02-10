import React, { Component } from 'react';

export default class SendMessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
  }

  render() {
    return <div>Тут будет форма для отправки сообщений</div>;
  }
}
