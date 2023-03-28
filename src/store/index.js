import { legacy_createStore as createStore, combineReducers, applyMiddleware} from 'redux';
import { todosReducer } from './todosReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReducer = combineReducers(
  {
    todos: todosReducer
  }
)

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
