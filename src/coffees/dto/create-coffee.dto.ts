//this is expected DTO input shape for CoffeesController POST request

import { IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateCoffeeDto {
  //id will be from database

  @ApiProperty({description: "The name of a coffee"})
  @IsString()
  readonly name: string;

  @ApiProperty({description: "The brand of a coffee"})
  @IsString()
  readonly brand: string;


  @ApiProperty({example:[]})
  //each:true  - each element must be string
  @IsString({ each: true })
  readonly flavors: string[];
}
