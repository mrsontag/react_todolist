import React, {useState } from 'react';

const TodoForm = props => {
    const { todos, setTodos } = props;
    const [ newtodo, setNewTodo ] = useState("");
    
    const AddTodo = (e) => {
        e.preventDefault();
        setTodos([...todos, {item: newtodo, completed: false} ]);
        setNewTodo("");
    }
    return(
        <div>
            <form onSubmit={AddTodo}>
                <label htmlFor="todo">New Todo Item:</label>
                <input type="text" name="todo" id="todo" value={newtodo} onChange={(e) => setNewTodo(e.target.value)} />
                <button type="submit" name="submit" id="submit">Add todo!</button>
            </form>
        </div>
    )
}

export default TodoForm;