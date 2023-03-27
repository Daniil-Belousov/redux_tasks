import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const {records, cash} = useSelector(state => state)

  const [name, setName] = useState('');
  const [cost, setCost] = useState('');

  const addRecord = () => {
    dispatch({type: 'ADD_RECORD', payload: {
      name: name, 
      cost: Number(cost), 
      id: `${name}${records?.length || 0}`
    }})
    setName('');
    setCost('');
  }

  const deleteRecord = (id, cost) => {
    dispatch({type: 'DELETE_RECORD', payload: {id, cost}})
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Создайте приложение для отслеживания затрат и доходов. 
          Используйте React для создания компонентов пользовательского интерфейса и Redux 
          для управления состоянием приложения. Напишите действия для добавления и удаления записей о затратах и доходах, 
          редукторы для обработки этих действий и селекторы для получения списка всех записей 
          и общей суммы затрат и доходов.</p>
          <div>
            <input 
              type='text' 
              placeholder='Введите наименование' 
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input 
              type='number' 
              placeholder='Введите стоимость' 
              value={cost}
              onChange={(e) => setCost(e.target.value)}
            />
            <button onClick={() => addRecord()}>Добавить в список</button>
          </div>
          <div>
            <h1>Список товаров:</h1>
            <h2>Общая стоимость: {cash}</h2>
            <ul>
              {records && records.map(record => {
                return(
                <li key={`${record.name}${record.id}`}>
                  <span>{record.name}</span>
                  <span style={{margin: '0 30px'}}>{record.cost}</span>
                  <button onClick={() => deleteRecord(record.id, record.cost)} style={{cursor: 'pointer'}}>x</button>
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
