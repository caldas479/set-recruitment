import { IsBoolean, IsOptional } from "class-validator";

export class UpdateToDoDTO {
  @IsOptional()
  text: string;

  @IsOptional()
  @IsBoolean()
  state: boolean;
}
