import React, { Component } from 'react';

export default class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  render() {
    return <div>Здесь будет заголовок</div>;
  }
}
