import { IsNumber, IsString, IsBoolean, IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger/dist/decorators";

export class CreateTaskDto{

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    title: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    description: string;

    @IsBoolean()
    @ApiProperty()
    completed: boolean;
}