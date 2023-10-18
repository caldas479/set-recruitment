import { IsNotEmpty } from 'class-validator';

export class CreateToDoDTO {
    @IsNotEmpty() 
    text: string;
}