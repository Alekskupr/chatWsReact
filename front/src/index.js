import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './redux/reducer';



const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(<Provider store = {store}><App className = 'app'/></Provider>, document.getElementById('root'));
