import { createHandler, Get, Param, Patch, Post, Req, Delete} from "next-api-decorators";

import { TodoService } from "@/lib/backend/services";

class TodoHandler {
  @Get()
  getToDos() {
    return TodoService.getToDos();
  }

  @Get("/:id")
  getToDoById(@Param("id") id: number) {
      if(TodoService.idExists(id)){
        return TodoService.getToDoById(id);
      }
      else {
        return {
          error: "To-do item not found",
        };
      }
  }

  @Post()
  addToDo() {
    const text = "ir ao gym"
    const newTodo = TodoService.addToDo(text);
    return newTodo;
  }

  @Patch("/:id")
  updateToDo(@Param("id") id: number) {
    if(TodoService.idExists(id)){
      const text = "ir as compras"
      return TodoService.updateToDo(id,text);
    }
    else {
      return {
        error: "To-do item not found",
      };
    }
  }

  @Delete("/:id") 
  deleteToDo(@Param("id") id: number) {
    if(TodoService.idExists(id)){
      return TodoService.deleteToDo(id);
    }
    else {
      return {
        error: "To-do item not found",
      };
    }
  }
}

export default createHandler(TodoHandler);
