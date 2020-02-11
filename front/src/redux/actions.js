import { MESSAGE, MESSAGEFROMSERVER, MESSAGES, LOGIN } from './types';

const messageInStateAC = message => {
  return {
    type: MESSAGE,
    payload: message,
  };
};

const messageFromServerInStateAC = message => {
  return {
    type: MESSAGEFROMSERVER,
    payload: message,
  };
};

const messagesInStateAC = messages => {
  return {
    type: MESSAGES,
    payload: messages,
  };
};

const loginAC = login => {
  return { type: LOGIN, payload: login };
};

export { messageInStateAC, messageFromServerInStateAC, messagesInStateAC, loginAC };
