import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import RootReducer from './store/reducers.js';
import { composeWithDevTools } from 'redux-devtools-extension'; // 리덕스 개발자 도구


const store = createStore(RootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


