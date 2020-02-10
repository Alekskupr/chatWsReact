import React, { Component } from 'react';

export default class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };
  }

  render() {
    return (
      <ul>
        <li>Тут будут сообщения</li>
      </ul>
    );
  }
}
