import { useState } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';
import './components/style.css'

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  return (
    <div className='d-flex p-3 me-auto section my-3'>
      <div>
        <Form
          inputText={inputText}
          todos={todos}
          setTodos={setTodos}
          setInputText={setInputText}
        />
        <TodoList
          setTodos={setTodos}
          todos={todos}
        />
      </div>
    </div>
  );
}

export default App;