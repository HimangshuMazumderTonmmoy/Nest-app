import { Controller } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dtos/create-product.dto';
import { Put, Body, Post, Get, Param, Delete, Patch } from '@nestjs/common';
import { PartialUpdateProductDto } from './dtos/partial-update-product.dto';
import { UpdateProductDto } from './dtos/update-product.dto';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Post()
    async create(@Body() dto: CreateProductDto) {
        return this.productsService.create(dto);
    }

    @Get()
    async findAll() {
        return this.productsService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return this.productsService.findOne(id);
    }

    @Patch(':id')
    async update(@Param('id') id: number, @Body() dto: PartialUpdateProductDto) {
        return this.productsService.update(id, dto);
    }

    @Put(':id')
    async replace(@Param('id') id: number, @Body() dto: UpdateProductDto) {
        return this.productsService.replace(id, dto);
    }

    @Delete(':id')
    async remove(@Param('id') id: number) {
        return this.productsService.remove(id);
    }

    
}
