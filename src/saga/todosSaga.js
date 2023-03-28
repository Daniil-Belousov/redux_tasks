import {put, takeEvery, call} from 'redux-saga/effects'
import { GET_REMOTE_TODOS, setRemoteTodosAction } from '../store/todosReducer';

const fetchTodosFromApi = () => fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')


function* fetchTodosWorker() {
  const data = yield call(fetchTodosFromApi);
  const json = yield call(() => new Promise(res => res(data.json())));
  yield put(setRemoteTodosAction(json));
}

export function* todosWatcher() {
  yield takeEvery(GET_REMOTE_TODOS, fetchTodosWorker)
}