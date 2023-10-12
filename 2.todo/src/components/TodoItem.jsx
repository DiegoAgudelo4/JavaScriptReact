import style from './TodoItem.module.css';
const TodoItem = ({ todo, deleteTodo, completedTodo, setEdit }) => {
    return (
        <li className={style.list}>
            <div
                className={`${style.listItem} ${todo.completed ? style.completed : ""}`}>
                {todo.title}
            </div>
            <div>
                <button onClick={() => deleteTodo(todo)}>Eliminar</button>
                <button onClick={() => completedTodo(todo)}>Completar</button>
                <button onClick={() => setEdit(todo)}>Editar</button>
            </div>
        </li>
    );
};

export default TodoItem;