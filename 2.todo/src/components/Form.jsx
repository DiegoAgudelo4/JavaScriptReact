import { useEffect } from "react";
import style from "./Form.module.css";
import uuid4 from 'uuid4';
//entre llaves porque se recibe un objeto
const Form = ({ InputTodo, setInputTodo, Todos, setTodos, edit, setEdit}) => {
    //cambiar la logica, preguntar si estoy editando....
    const handlerSubmit = (e) => {
        e.preventDefault();//evita que sea enviado a otra pagina
        if (edit) {//si hay un objeto en edit significa que se va a editar
            editTodo(edit);
        } else {
            const newTodo = {
                id: uuid4(),
                title: InputTodo,
                completed: false
            };
            setTodos([...Todos, newTodo]); //agrega  el arreglo de objetos otra ToDo
            setInputTodo(""); //setea el input
        }
    }; 

    const editTodo = (todo) => {
        const newTodos = Todos.map(item => (
            //operador ternario
            item.id === todo.id
                ? { ...item, title: InputTodo }
                : item
        ));
        setTodos(newTodos);
        setEdit("");
    };
    useEffect(() => {
        if (edit) setInputTodo(edit.title);
        else setInputTodo("");
      }, [edit]);
    
    return (
        <form onSubmit={handlerSubmit}>
            <input
                name="task"
                className={style.taskInput}
                value={InputTodo}
                onChange={(e) => { setInputTodo(e.target.value) }} />
            <button type="submit" className={style.button}>{edit ? "Edit" : "Add"}</button>
        </form>
    )
};

export default Form;