import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { legacy_createStore as createStore} from 'redux'
import { Provider } from 'react-redux';

const defaultState = {
  expenditures: [],
  incomes: [],
  cash: 0
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_EXPENDITURE':
      return {...state, expenditures: [...state.expenditures, action.payload], cash: state.cash - action.payload.cost}

    case 'DELETE_EXPENDITURE':
      return {...state, expenditures: state.expenditures.filter(record => record.id !== action.payload.id), cash: state.cash + action.payload.cost}

      case 'ADD_INCOME':
        return {...state, incomes: [...state.incomes, action.payload], cash: state.cash + action.payload.cost}
      
        case 'DELETE_INCOME':
          return {...state, incomes: state.incomes.filter(record => record.id !== action.payload.id), cash: state.cash - action.payload.cost}

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
