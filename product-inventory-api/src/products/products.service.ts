import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from './entities/products.entity';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dtos/create-product.dto';
import { PartialUpdateProductDto } from './dtos/partial-update-product.dto';
import { UpdateProductDto } from './dtos/update-product.dto';

@Injectable()
export class ProductsService {
    constructor (
        @InjectRepository(Products)
        private readonly productsRepo: Repository<Products>,
    ) {}

    async create (dto: CreateProductDto): Promise<{message: string, data: Products}> {
        const productEntity = this.productsRepo.create(dto);
        const savedProduct = await this.productsRepo.save(productEntity);

        return {
            message: "Product created successfully",
            data: savedProduct,
        };
    }
}