import './registration.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginAC } from '../../redux/actions';

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
    };
  }

  loginInState = e => {
    this.setState({ login: e.target.value });
  };

  registration = e => {
    e.preventDefault();
    const { login } = this.state;
    this.props.profileUser(login);
    this.props.history.push('/chat');
  };

  render() {
    return (
      <div className="container registration">
        <form className="formRegistration" onSubmit={this.registration}>
          <input
            className="loginInput"
            value={this.state.login}
            type="text"
            onChange={this.loginInState}
            placeholder="Введите свое имя"
          />
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    profileUser: login => dispatch(loginAC(login)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
