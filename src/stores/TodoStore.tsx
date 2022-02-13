// stores/TodoStore.ts
import { observable, action, computed, reaction, makeObservable, makeAutoObservable } from "mobx";
import { createContext } from "react";
import { v4 as uuidv4 } from "uuid";

export interface Todo {
  id?: string;
  title: string;
  completed: boolean;
}

class TodoStore {
  constructor() {
      makeAutoObservable(this)
  }

  @observable todos: Todo[] = [
    { id: uuidv4(), title: "Item #1", completed: false },
    { id: uuidv4(), title: "Item #2", completed: false },
    { id: uuidv4(), title: "Item #3", completed: false },
    { id: uuidv4(), title: "Item #4", completed: false },
    { id: uuidv4(), title: "Item #5", completed: true },
    { id: uuidv4(), title: "Item #6", completed: false }
  ];


  addTodo = (todo: Todo) => {
    this.todos.push({ ...todo, id: uuidv4() });
  };


  toggleTodo = (id: string) => {
    this.todos = this.todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        };
      }
      return todo;
    });
  };


  removeTodo = (id: string) => {
    this.todos = this.todos.filter(todo => todo.id !== id);
  };

  get info() {
    return {
      total: this.todos.length,
      completed: this.todos.filter(todo => todo.completed).length,
      notCompleted: this.todos.filter(todo => !todo.completed).length
    };
  }
}

export default createContext(new TodoStore());
