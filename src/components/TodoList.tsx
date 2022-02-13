import { observer } from "mobx-react";
import { useContext, useState } from "react";
import TodoStore from "../stores/TodoStore";

const TodoList = () => {
  const todoStore = useContext(TodoStore);
  const { todos, toggleTodo, removeTodo } = todoStore;
  const [title, setTitle] = useState("");

  const { addTodo, info } = todoStore;
  return (
    <>
      {todos.map((todo) => (
        <>
          <p>{todo.title}</p>
          <p>{todo.completed}</p>
          <button onClick={(_) => toggleTodo(todo.id!)}>Toggle</button>
          <button onClick={(_) => removeTodo(todo.id!)}>Remove</button>
         
        </>
      ))}
       <>
            <p>Total items: {info.total}</p>
            <p>Finished items: {info.completed}</p>
            <p>Unfinished items: {info.notCompleted}</p>
            <br />
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <button
              onClick={(_) => {
                addTodo({
                  title: title,
                  completed: false,
                });
                setTitle("");
              }}
            >
              ADD
            </button>
          </>
    </>
  );
};

export default observer(TodoList);
