import { useState } from "react"
import Todo from "./TodoItem"
import "./todoApp.css"

const TodoApp = () => {
    const [title, setTitle] = useState('')
    const [todos, setTodos] = useState([])

    const handleSubmit = e => {
        e.preventDefault()
        if (e.target[0].value.trim() === '') {
            alert(`Field doesn't be empty`)
            return
        }
        const newTodo = {
            id: crypto.randomUUID(),
            title,
            completed: false
        }
        setTodos([newTodo, ...todos])
        setTitle('')
        e.target[0].focus()
    }


    const handleChange = e => {
        setTitle(e.target.value)
    }

    const handleUpdate = (id, value) => {
        setTodos(
            todos.map(todo => 
                todo.id === id 
                    ? { ...todo, title: value } 
                    : todo
            )
        );
    };

    const handleDelete = id => setTodos(todos.filter(todo => todo.id !==  id))
    

    return <div className="todoContainer">
        <h1 className="title">TODO LIST</h1>
        <form onSubmit={handleSubmit} className="todoCreateForm" action="">
            <input onChange={handleChange} className="todoInput" value={title}/>
            <input className="button todoButtonCreate" type="submit" value="Create todo" />
        </form>

        <div className="todosContainer">
            {
                todos?.length
                ? todos.map(todo => (
                    <Todo key={todo.id} todo={todo} onUpdate={handleUpdate} onDelete={handleDelete}></Todo>
                ))
                : <p className="messageNothing">Nothing to do today!</p>
            }
        </div>
    </div>
}

export default TodoApp