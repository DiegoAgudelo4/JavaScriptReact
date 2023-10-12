import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import style from './App.module.css';
import TodoList from './components/TodoList';


function App() {
  const [InputTodo, setInputTodo] = useState("");
  const [Todos,setTodos]=useState([]);
  const [edit, setEdit]=useState(null);

  return (
    <div className={style.container}>
      <div className={style.appwrapper}>
        <div>
          <Header/>
        </div>
        <div>
          <Form InputTodo={InputTodo} 
                setInputTodo={setInputTodo}
                Todos={Todos} 
                setTodos={setTodos} 
                edit={edit} 
                setEdit={setEdit}/>
        </div>
        <div>
          <TodoList todos={Todos} 
                    setTodos={setTodos} 
                    setEdit={setEdit}/>
        </div>
      </div>
    </div>
  )
};

export default App
