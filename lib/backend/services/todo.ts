interface ITodo {
  id: number;
  text: string;
  completed: boolean;
}

class Todo {
  todos: Array<ITodo>;

  constructor() {
    this.todos = new Array();
  }

  idExists(id: number): boolean {
    return this.todos.some((todo) => todo.id === id);
  }

  getToDos() {
    return this.todos;
  }

  getToDoById(id: number): ITodo {
    return this.todos[id];
  }

  addToDo(text: string): ITodo {
    const newTodo: ITodo = {
      id: this.todos.length + 1,
      text,
      completed: false,
    };
    this.todos.push(newTodo);
    return newTodo;
  }

  updateToDo(id: number, newText: string): ITodo{
    this.todos[id].text = newText;
    return this.todos[id];
  }

  deleteToDo(id: number): ITodo {
    const deletedTodo = this.todos.splice(id, 1)[0];
    return deletedTodo;
  }
}

// Todo Service lifecycle management
const todo = global.todo || new Todo();
if (process.env.NODE_ENV !== "production") global.todo = todo;

export { Todo, todo as TodoService };
export type { ITodo };
