const defaultState = {
  todos: []
}

export const todosReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return {...state, todos : [...state.todos, action.payload]}

    case 'DELETE_TODO':
      return {...state, todos: state.todos.filter(todo => todo.id !== action.payload.id)}

    case 'EDIT_TODO':
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