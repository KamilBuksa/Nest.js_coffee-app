//this is expected DTO input shape for CoffeesController POST request

import {IsString} from "class-validator";

export class CreateCoffeeDto {
    //id will be from database

    @IsString()
    readonly name: string;

    @IsString()
    readonly brand: string;

    //each:true  - each element must be string
    @IsString({each:true})
    readonly flavors: string[];
}
