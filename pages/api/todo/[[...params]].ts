import { createHandler, Get, Param, Patch, Post, Body, Delete, ValidationPipe, NotFoundException} from "next-api-decorators";
import { TodoService } from "@/lib/backend/services";
import { CreateToDoDTO } from "@/dto/CreateToDoDTO";
import { UpdateToDoDTO } from "@/dto/UpdateToDoDTO";

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
  addToDo(@Body(ValidationPipe) body: CreateToDoDTO) {
    return TodoService.addToDo(body.text);
    
  }

  @Patch("/:id")
  updateToDo(@Param("id") id: number, @Body(ValidationPipe) body: UpdateToDoDTO) {
    if(!TodoService.idExists(id)){
      throw new NotFoundException('Task not found.');
    }
    if(body.text === undefined){
      return TodoService.updateToDoState(id);
    }
    return TodoService.updateToDoText(id, body.text);
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
