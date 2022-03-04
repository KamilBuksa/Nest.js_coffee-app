import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Patch,
  Delete,
  Query, Inject, UsePipes, ValidationPipe, SetMetadata
} from "@nestjs/common";
import { CoffeesService } from "./coffees.service";
import { CreateCoffeeDto } from "./dto/create-coffee.dto";
import { UpdateCoffeeDto } from "./dto/update-coffee.dto";
import { PaginationQueryDto } from "../common/dto/pagination-query.dto";
import { REQUEST } from "@nestjs/core";
import { Request } from "express";
import { Public } from "../common/decorators/public.decorator";
import { ParseIntPipe } from "../common/pipes/parse-int.pipe";
import { Protocol } from "../common/decorators/protocol.decorator";
import { ApiForbiddenResponse, ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags('coffees')
@Controller("coffees")
export class CoffeesController {
  constructor(private readonly coffeesServices: CoffeesService, @Inject(REQUEST) private readonly request: Request) {
  }

  @ApiForbiddenResponse({description:"Forbidden, on path GET"})
  @Public()
  @Get()
  async findAll(@Protocol('https') protocol:string ,@Query() paginationQuery: PaginationQueryDto) {
    console.log(protocol);
    return this.coffeesServices.findAll(paginationQuery);
  }

  @Get(":id")
  findOne(@Param("id", ParseIntPipe) id: number) {
    console.log(id);
    return this.coffeesServices.findOne("" + id);
  }

  @Post()
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    return this.coffeesServices.create(createCoffeeDto);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body(ValidationPipe) updateCoffeeDto: UpdateCoffeeDto) {
    return this.coffeesServices.update(id, updateCoffeeDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.coffeesServices.remove(id);
  }
}
