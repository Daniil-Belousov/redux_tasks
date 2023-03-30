import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const {expenditures, incomes, cash} = useSelector(state => state)

  const [incomeName, setIncomeName] = useState('');
  const [expendName, setExpendName] = useState('');
  const [incomeCost, setIncomeCost] = useState('');
  const [expendCost, setExpendCost] = useState('');

  const addExpenditure = () => {
    if(cash > expendCost) {
      dispatch({type: 'ADD_EXPENDITURE', payload: {
        name: expendName, 
        cost: Number(expendCost), 
        id: `${expendName}${Date.now()}`
      }})
      setExpendName('');
      setExpendCost('');
    } else {
      alert('У вас не достаточно денег')
    }
    
  }

  const deleteExpenditure = (id, cost) => {
    dispatch({type: 'DELETE_EXPENDITURE', payload: {id, cost}})
  }

  const addIncome = () => {
    dispatch({type: 'ADD_INCOME', payload: {
      name: incomeName, 
      cost: Number(incomeCost), 
      id: `${incomeName}${Date.now()}`
    }})
    setIncomeName('');
    setIncomeCost('');
  }

  const deleteIncome = (id, cost) => {
    dispatch({type: 'DELETE_INCOME', payload: {id, cost}})
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
            <h1>У вас осталось: {cash} руб</h1>
            <div style={{display: 'flex', justifyContent: 'space-between', gap: '10%', minWidth: '900px'}}>
              <div>
                <input 
                  type='text' 
                  placeholder='Введите расход' 
                  value={expendName}
                  onChange={(e) => setExpendName(e.target.value)}
                />
                <input 
                  type='number' 
                  placeholder='Введите сумму' 
                  value={expendCost}
                  onChange={(e) => setExpendCost(e.target.value)}
                />
                <button onClick={() => addExpenditure()}>Добавить расход</button>
              </div>
              <div>
                <input 
                  type='text' 
                  placeholder='Введите доход' 
                  value={incomeName}
                  onChange={(e) => setIncomeName(e.target.value)}
                />
                <input 
                  type='number' 
                  placeholder='Введите сумму' 
                  value={incomeCost}
                  onChange={(e) => setIncomeCost(e.target.value)}
                />
                <button onClick={() => addIncome()}>Добавить доход</button>
              </div>
            </div>
          </div>
          <div style={{display: 'flex', justifyContent: 'space-between', gap: '10%', minWidth: '900px'}}>
            <div>
              <h2>Список расходов:</h2>
              <ul>
                {expenditures && expenditures.map(record => {
                  return(
                  <li key={`${record.name}${record.id}`}>
                    <span>{record.name}</span>
                    <span style={{margin: '0 30px'}}>{record.cost}</span>
                    <button onClick={() => deleteExpenditure(record.id, record.cost)} style={{cursor: 'pointer'}}>x</button>
                  </li>
                  )
                })}
              </ul>
            </div>
            <div>
              <h2>Список доходов:</h2>
              <ul>
                {incomes && incomes.map(record => {
                  return(
                  <li key={`${record.name}${record.id}`}>
                    <span>{record.name}</span>
                    <span style={{margin: '0 30px'}}>{record.cost}</span>
                    <button onClick={() => deleteIncome(record.id, record.cost)} style={{cursor: 'pointer'}}>x</button>
                  </li>
                  )
                })}
              </ul>
            </div>
          </div>
      </header>
    </div>
  );
}

export default App;
