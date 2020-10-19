import React, {useEffect} from 'react';

const TodoList = props => {
    const { todos, setTodos } = props;

    const markComplete = (e, index) => {
        e.preventDefault();
        setTodos(todos.map((todo, index) => index.toString() === e.target.dataset.index ? { item:todo.item, completed: todo.completed ? false : true} : todo )); 
    }
    const deleteTodo = (e) => {
        e.preventDefault();
        setTodos(todos.filter((todo, index) => index.toString() === e.target.dataset.index ? false : true ));
    }
    useEffect(()=> {
        localStorage.setItem('TodoList', JSON.stringify(todos));
    }, [todos])
    
    return(
        <div>
            <h2>The ToDo List:</h2>
            <ul>
                {todos.map((item, index) => {
                    return(
                        <li key={index.toString()} className={ item.completed ? "completed" : ""}>
                            <span data-index={index} onClick={markComplete}>{item.item}</span>
                            <button data-index={index} name={"delete"+index} id={"delete"+index} onClick={deleteTodo}>Delete</button>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default TodoList;