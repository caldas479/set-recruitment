import { createHandler, Get, Param, Patch, Post, Body, Delete, ValidationPipe, NotFoundException} from "next-api-decorators";
import { TodoService } from "@/lib/backend/services";
import { ToDoDTO } from "@/dto/ToDoDTO";

class TodoHandler {
  @Get()
  getToDos() {
    return TodoService.getToDos();
  }

  @Get("/:id")
  getToDoById(@Param("id") id: number) {
    if(!TodoService.idExists(id)){
      throw new NotFoundException('Task not found.');
    }
    return TodoService.getToDoById(id);
  }

  @Post()
  addToDo(@Body(ValidationPipe) body: ToDoDTO) {
    const newTodo = TodoService.addToDo(body.text);
    return newTodo;
  }

  @Patch("/:id")
  updateToDoText(@Param("id") id: number, @Body(ValidationPipe) body: ToDoDTO) {
    if(!TodoService.idExists(id)){
      throw new NotFoundException('Task not found.');
    }
    return TodoService.updateToDoText(id, body.text);
  }

  @Patch("/:id")
  updateToDoState(@Param("id") id: number) {
    if(!TodoService.idExists(id)){
      throw new NotFoundException('Task not found.');
    }
    return TodoService.updateToDoState(id);
  }

  @Delete("/:id") 
  deleteToDo(@Param("id") id: number) {
    if(!TodoService.idExists(id)){
      throw new NotFoundException('Task not found.');
    }
    return TodoService.deleteToDo(id);
  }
}

export default createHandler(TodoHandler);
