import { observer } from "mobx-react";
import { useContext, useState } from "react";
import TodoStore from "../stores/TodoStore";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const todoStore = useContext(TodoStore);
  const { addTodo, info } = todoStore;

  return (
    <>
      <p>Total items: {info.total}</p>
      <p>Finished items: {info.completed}</p>
      <p>Unfinished items: {info.notCompleted}</p>
      <br />
      <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
    <button onClick={_=>{
        addTodo({
            title: title,
            completed: false
        })
        setTitle("")
    }}>ADD</button>
    </>
  );
};

export default observer(AddTodo);
