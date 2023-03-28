import { all } from 'redux-saga/effects'
import { todosWatcher } from './todosSaga'

export function* rootWatcher() {
  yield all([todosWatcher()])
}