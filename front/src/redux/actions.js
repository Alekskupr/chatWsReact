import { MESSAGE, MESSAGEFROMSERVER, MESSAGES } from './types';

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

export { messageInStateAC, messageFromServerInStateAC, messagesInStateAC };
