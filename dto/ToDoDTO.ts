import { IsNotEmpty } from 'class-validator';

export class ToDoDTO {
    @IsNotEmpty()  
    text: string;
}