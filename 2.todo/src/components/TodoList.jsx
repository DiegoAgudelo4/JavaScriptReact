import TodoItem from './TodoItem'
//crear boton para eliminar, completar o editar tareas
const TodoList = ({ todos, setTodos, setEdit }) => {
    const deleteTodo = ({ id }) => {
        const newTodo = todos.filter(todo => todo.id !== id);
        setTodos(newTodo);
    };
    const completedTodo = (todo) => {
        const newTodos = todos.map(item => (
            //operador ternario
            item.id === todo.id
                ? { ...item, completed: !item.completed }
                : item
        ));
        setTodos(newTodos);
    };
    return (
        <div>
            {todos.map(todo => (
                //componente de lógica
                <TodoItem 
                    key={todo.id} 
                    todo={todo} 
                    deleteTodo={deleteTodo}
                    completedTodo={completedTodo}
                    setEdit={setEdit}
                    />
            ))};
        </div>
    )
};

export default TodoList;