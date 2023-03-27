import { legacy_createStore as createStore, combineReducers} from 'redux';
import { todosReducer } from './todosReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers(
  {
    todos: todosReducer
  }
)

export const store = createStore(rootReducer, composeWithDevTools());
