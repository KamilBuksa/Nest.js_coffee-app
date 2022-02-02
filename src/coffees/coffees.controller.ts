import {
    Controller,
    Get,
    Param,
    Post,
    Body,
    Patch,
    Delete,
    Query, Inject, UsePipes, ValidationPipe
} from "@nestjs/common";
import {CoffeesService} from "./coffees.service";
import {CreateCoffeeDto} from "./dto/create-coffee.dto";
import {UpdateCoffeeDto} from "./dto/update-coffee.dto";
import {PaginationQueryDto} from "../common/dto/pagination-query.dto";
import { REQUEST } from "@nestjs/core";
import { Request } from "express";

@Controller('coffees')
export class CoffeesController {
    constructor(private readonly coffeesServices: CoffeesService, @Inject(REQUEST) private readonly request:Request) {
        console.log('CoffeController instantied')

    }


    @Get()
    findAll(@Query() paginationQuery: PaginationQueryDto) {
        return this.coffeesServices.findAll(paginationQuery)
    }

    @Get(':id')
    findOne(@Param('id') id:number){
        console.log(typeof id)
        return this.coffeesServices.findOne("" + id)
    }

    @Post()
    create(@Body() createCoffeeDto: CreateCoffeeDto) {
        return this.coffeesServices.create(createCoffeeDto)
    }

    @Patch(':id')
    update(@Param('id') id:string, @Body(ValidationPipe) updateCoffeeDto: UpdateCoffeeDto) {
        return this.coffeesServices.update(id,updateCoffeeDto)
    }

    @Delete(':id')
    remove(@Param('id') id:string) {
        return this.coffeesServices.remove(id)
    }
}
