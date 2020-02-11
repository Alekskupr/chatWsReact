import React, { Component } from 'react';
import './title.css';

export default class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  render() {
    return (
      <div className="title">
        <p className="name">Приветствую {this.props.login}! </p>
      </div>
    );
  }
}
