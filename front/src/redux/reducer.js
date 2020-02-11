import { MESSAGE, MESSAGEFROMSERVER, MESSAGES, LOGIN } from './types';

const initialState = {
  login: '',
  message: '',
  messages: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case MESSAGE: {
      return {
        ...state,
        message: action.payload,
      };
    }

    case MESSAGEFROMSERVER: {
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    }

    case MESSAGES: {
      return {
        ...state,
        messages: action.payload,
      };
    }
    case LOGIN: {
      return {
        ...state,
        login: action.payload,
      }
    }

    default:
      return state;
  }
}
