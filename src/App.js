import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users)

  const [userName, setUserName] = useState('');

  const addUser = () => {
    dispatch({type: 'ADD_USER', payload: {name: userName, id: `${userName}${users?.length || 0}`}});
    setUserName('');
  }

  const getUsers = () => {
    dispatch({type: 'GET_USERS'});
  }

  const deleteUser = (id) => {
    dispatch({type: 'DELETE_USER', payload: id});
  }

  return (
    <div className="App">
       <header className="App-header">
        <span>
          Создайте Redux-хранилище для приложения, в котором можно добавлять и удалять пользователей. 
          Напишите действия (actions) для добавления и удаления пользователей, 
          редукторы (reducers) для обработки этих действий и селекторы (selectors) 
          для получения списка пользователей из хранилища.
        </span>
        <div>
          <input 
            required 
            value={userName} 
            onChange={(e) => setUserName(e.target.value)} 
            type='name' 
            placeholder='Введите имя'
          />
          <button onClick={() => addUser()}>Добавить юзера</button>
          <button onClick={() => getUsers()}>Получить список юзеров</button>
        </div>
        <div>
          <h1>Список юзеров:</h1>
          <ul>
            {users && users.map(user => {
              return <li key={`${user.name}${user.id}`}>
                {user.name}
                <button 
                  style={{padding: '5px', marginLeft: '10px', cursor: 'pointer'}}
                  onClick={() => deleteUser(user.id)}
                >x</button>
                </li>
            })}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
