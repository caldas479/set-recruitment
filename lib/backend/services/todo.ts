interface ITodo {
  id: number;
  text: string;
  state: boolean;
}

class Todo {
  _todos: Record<number, ITodo>;

  constructor() {
    this._todos = new Array();
  }

  idExists(id: number): boolean {
    return id in this._todos;
  }

  getToDos() {
    return Object.values(this._todos);
  }

  getToDoById(id: number): ITodo {
    return this._todos[id];
  }

  addToDo(text: string): ITodo {
    const newId = Object.keys(this._todos).length + 1;
    const newTodo: ITodo = {
      id: newId,
      text,
      state: false,
    };
    this._todos[newId] = newTodo;
    return newTodo;
  }

  updateToDo(id: number, todo: Partial<ITodo>): ITodo {
    this._todos[id] = {
      ...this._todos[id],
      ...todo,
    };

    return this._todos[id];
  }

  deleteToDo(id: number): ITodo {
    const deletedTodo = this._todos[id];
    delete this._todos[id];
    return deletedTodo;
  }
}

// Todo Service lifecycle management
const todo = global.todo || new Todo();
if (process.env.NODE_ENV !== "production") global.todo = todo;

export { Todo, todo as TodoService };
export type { ITodo };
