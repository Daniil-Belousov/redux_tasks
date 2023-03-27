import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { legacy_createStore as createStore} from 'redux'
import { Provider } from 'react-redux';

const defaultState = {
  users: []
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return {...state, users: [...state.users, action.payload]}
 
     case 'DELETE_USER':
       const filteredUsers = state.users.filter(user => user.id !== action.payload)
       return{...state, users: [...filteredUsers]};
 
    default:
      return defaultState;
  }
}

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
