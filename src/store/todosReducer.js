const defaultState = {
  todos: []
}

const ADD_TODO = 'ADD_TODO'
const DELETE_TODO = 'DELETE_TODO'
const EDIT_TODO = 'EDIT_TODO'

export const todosReducer = (state = defaultState, action) => {
  switch(action.type) {
    case ADD_TODO:
      return {...state, todos : [...state.todos, action.payload]}

    case DELETE_TODO:
      return {...state, todos: state.todos.filter(todo => todo.id !== action.payload.id)}

    case EDIT_TODO:
      return {...state, todos: state.todos.map(todo => {
        if(todo.id === action.payload.id) {
          todo.task = action.payload.task;
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