const defaultState = {
  todos: []
}

const ADD_TODO = 'ADD_TODO'
const DELETE_TODO = 'DELETE_TODO'
const EDIT_TODO = 'EDIT_TODO'
const GET_REMOTE_TODOS = 'GET_REMOTE_TODOS'

export const todosReducer = (state = defaultState, action) => {
  switch(action.type) {
    case GET_REMOTE_TODOS:
      const remoteTodos = Object.values(action.payload);
      return {...state, todos: [...state.todos, ...remoteTodos]}

    case ADD_TODO:
      return {...state, todos : [...state.todos, action.payload]}

    case DELETE_TODO:
      return {...state, todos: state.todos.filter(todo => todo.id !== action.payload.id)}

    case EDIT_TODO:
      return {...state, todos: state.todos.map(todo => {
        if(todo.id === action.payload.id) {
          todo.title = action.payload.title;
        }
        return todo;
      }) }

    default: 
      return state
  }
}

export const addTodoAction = (payload) => ({type: ADD_TODO, payload});
export const deleteTodoAction = (payload) => ({type: DELETE_TODO, payload});
export const editTodoAction = (payload) => ({type: EDIT_TODO, payload});
export const getRemoteTodosAction = (payload) => ({type: GET_REMOTE_TODOS, payload});