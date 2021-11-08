import { ApiProperty } from "@nestjs/swagger";
import { IsAlpha, MaxLength } from "class-validator";

export class CreateUserDto{
    @ApiProperty()
    @IsAlpha()
    @MaxLength(16)
    name:string;
}