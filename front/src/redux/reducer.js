import { MESSAGE, MESSAGEFROMSERVER, MESSAGES } from './types';

const initialState = {
  user: '',
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

    default:
      return state;
  }
}
