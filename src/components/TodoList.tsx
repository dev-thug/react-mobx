import { observer } from "mobx-react"
import { useContext } from "react"
import TodoStore from "../stores/TodoStore"

const TodoList = () =>{
    const todoStore = useContext(TodoStore)
    const {todos,toggleTodo, removeTodo} = todoStore

    return <>
    {todos.map(todo => (
        <>
        <p>{todo.title}</p>
        <p>{todo.completed}</p>
        <button onClick={_=> toggleTodo(todo.id!)}>Toggle</button>
        <button onClick={_=> removeTodo(todo.id!)}>Remove</button>
        </>
    ))}
    </>
}

export default observer(TodoList);