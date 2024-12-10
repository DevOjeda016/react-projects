import { useState } from "react"

const Todo = ({todo, onUpdate, onDelete}) => {
    const [isEdit, setIsEdit] = useState(false)
    
    const FormEdit = () => {
        const [newValue, setNewValue] = useState(todo.title)
        const handleSubmit = e => {
            e.preventDefault()
            onUpdate(todo.id, newValue)
            setIsEdit(false)
        }
    
        const handleChange = e => {
            setNewValue(e.target.value)
        }
        return (
        <form className="todoUpdateForm" onSubmit={handleSubmit}>
            <input
                className="todoInput"
                type="text" 
                onChange={handleChange}
                value={newValue}
            />
            <button className="button buttonUpdate" type="submit">Update</button>
            <button className="button buttonCancel" type="button" onClick={() => setIsEdit(false)}>Cancel</button>
        </form>
        )
    }

    const TodoItem = () => {
        return (
            <div className="todoInfo">
                <span className="todoTitle">{todo.title}</span>
                <button className="button buttonEdit" type="button" onClick={() => setIsEdit(true)}>Edit</button>
                <button className="button buttonDelete" type="button" onClick={() => onDelete(todo.id)}>Delete</button>
            </div>
        )
    }
    return <div className="todo">{isEdit ? <FormEdit /> : <TodoItem />}</div>
}

export default Todo