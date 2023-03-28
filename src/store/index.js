import { legacy_createStore as createStore, combineReducers, applyMiddleware} from 'redux';
import { todosReducer } from './todosReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from '@redux-saga/core';
import { rootWatcher } from '../saga';

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers(
  {
    todos: todosReducer
  }
)

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootWatcher)