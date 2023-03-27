import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos.todos)

  const [task, setTask] = useState('');
  const [isEditTask, setEditTask] = useState(null);
  const [editText, setEditText] = useState('');

  const addTodo = () => {
    dispatch({type: 'ADD_TODO', payload: {task, id: `${Math.random()}`}});
    setTask('');
  }

  const deleteTodo = (id) => {
    dispatch({type: 'DELETE_TODO', payload: {id}})
  }

  const editTask = (todo) => {
    setEditTask(todo.id);
    setEditText(todo.task)
  }

  const saveTask = (todo) => {
    dispatch({type: 'EDIT_TODO', payload: todo});
    setEditTask(null);
    setEditText('');
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Создайте приложение для управления списком задач с возможностью добавления, 
          удаления и изменения задач. Используйте Redux DevTools для отслеживания изменений состояния приложения, 
          таких как добавление, удаление или изменение задачи. Используйте возможности DevTools, 
          такие как просмотр истории изменений, отладку действий и редукторов, 
          чтобы легко отследить и исправить ошибки в приложении.
        </p>
        <h1>Todos</h1>
        <div>
          <input 
            placeholder='таск' 
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button
            style={{marginLeft: '10px', cursor: 'pointer'}} 
            onClick={() => addTodo()}
          >Добавить</button>
        </div>
        <div>
          <h2>Список задача:</h2>
          <ul>
            {todos && todos.map(todo => {
              return(
                <li key={`${todo.id}`}>
                  {isEditTask === todo.id ?
                    (
                    <>
                      <input
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                      />
                      <button
                        onClick={() => saveTask({...todo, task: editText})}
                        style={{marginLeft: '10px', cursor: 'pointer'}}
                      >save</button> 
                    </> 
                    )
                    : (
                      <>
                        <span>{todo.task}</span>
                        <button 
                          onClick={() => editTask(todo)}
                          style={{marginLeft: '10px', cursor: 'pointer'}}
                        >edit</button>
                      </>
                    )
                  }
                  <button 
                    onClick={() => deleteTodo(todo.id)}
                    style={{marginLeft: '10px', cursor: 'pointer'}}
                  >x</button>
                </li>
              )
            })}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
