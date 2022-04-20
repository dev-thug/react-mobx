import { action, computed, makeObservable, observable } from "mobx";
import { observer } from "mobx-react";

class Todo {
  id = Math.random();
  title = "";
  finished = false;

  constructor(title: string) {
    makeObservable(this, {
      title: observable,
      finished: observable,
      toggle: action,
    });
    this.title = title;
  }

  //   state를 변경하는 메서드는 MobX 용어로 action
  toggle() {   
    this.finished = !this.finished;
  }
}

class TodoList {
  todos: Todo[] = [];

  get unfinishedTodoCount() {
    return this.todos.filter((todo) => !todo.finished).length;
  }

  constructor(todos: Todo[]) {
    makeObservable(this, {
      todos: observable,
      unfinishedTodoCount: computed,
    });
    this.todos = todos;
  }

  
}

const TodoView: React.FC<{ todo: Todo }> = observer((props) => {
  return (
    <li>
      <input
        type="checkbox"
        defaultChecked={props.todo.finished}
        
        onClick={() => props.todo.toggle()}
      />
      {props.todo.title}
    </li>
  );
});

const TodoListView: React.FC<{ todoList: TodoList }> = observer((props) => {
  return (
    <div>
      <ul>
        {props.todoList.todos.map((todo) => (
          <TodoView key={todo.id} todo={todo} />
        ))}
      </ul>
      Tasks left : {props.todoList.unfinishedTodoCount}
    </div>
  );
});


const store = new TodoList([
  new Todo("Get Coffee"),
  new Todo("Write simpler code"),
]);


const App = () => {
  return <TodoListView todoList={store} />;
};

export default App;
