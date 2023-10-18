import { IsOptional } from 'class-validator';

export class UpdateToDoDTO {
    @IsOptional() 
    text: string;
}