import { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import { TodosContext } from './components/context/TodosContext';
import { v4 as uuidv4 } from 'uuid';



const intiotodos = [
  {
    id: uuidv4(),
    title: "كتابة مقال",
    des: "كتابة مقال التفاصيل",
    isCompleted: false
  },
  {
    id: uuidv4(),
    title: "المذاكرة",
    des: "المذاكرة التفاصيل",
    isCompleted: false
  },
  {
    id: uuidv4(),
    title: "البرمجة ",
    des: "التفاصيل",
    isCompleted: false
  }
]
function App() {
  const [todos, setTodos] = useState(intiotodos)

  return (
    <div className="App">
      <TodosContext.Provider value={{todos, setTodos}}>
      <TodoList />
      </TodosContext.Provider>
    </div>
  );
}

export default App;
