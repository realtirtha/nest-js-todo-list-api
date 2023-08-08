import { IsNumber, IsString, IsBoolean, IsNotEmpty } from "class-validator";

export class CreateTaskDto{

    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsBoolean()
    completed: boolean;
}