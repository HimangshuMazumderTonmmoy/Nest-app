import { Controller, ParseIntPipe, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dtos/create-product.dto';
import { Put, Body, Post, Get, Param, Delete, Patch } from '@nestjs/common';
import { PartialUpdateProductDto } from './dtos/partial-update-product.dto';
import { UpdateProductDto } from './dtos/update-product.dto';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Get()
    async findAll() {
        return this.productsService.findAll();
    }

    @Get('search')
    async search(@Query('keyword') keyword: string) {
        return this.productsService.search(keyword);
    }

    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number) {
        return this.productsService.findOne(id);
    }

    @Get('category/:cat')
    async findByCategory(@Param('cat') category: string) {
        return this.productsService.findByCategory(category);
    }

    @Post()
    async create(@Body() dto: CreateProductDto) {
        return this.productsService.create(dto);
    }

    @Put(':id')
    async replace(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateProductDto) {
        return this.productsService.replace(id, dto);
    }

    @Patch(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() dto: PartialUpdateProductDto) {
        return this.productsService.update(id, dto);
    }

    @Patch(':id/toggle')
    async toggleActive(@Param('id', ParseIntPipe) id: number) {
        return this.productsService.toggleActive(id);
    }

    @Delete(':id')
    async remove(@Param('id', ParseIntPipe) id: number) {
        return this.productsService.remove(id);
    }
}
