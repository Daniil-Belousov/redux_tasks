import { getRemoteTodosAction } from "../store/todosReducer"

export const fetchTodos = () => {
  return dispatch => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(response => response.json())
      .then(json => dispatch(getRemoteTodosAction(json)))
  }
}