import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from './entities/products.entity';
import { Like, Repository } from 'typeorm';
import { CreateProductDto } from './dtos/create-product.dto';
import { PartialUpdateProductDto } from './dtos/partial-update-product.dto';
import { UpdateProductDto } from './dtos/update-product.dto';

@Injectable()
export class ProductsService {
    constructor (
        @InjectRepository(Products)
        private readonly productsRepo: Repository<Products>,
    ) {}

    async findAll(): Promise<{message: string, count: number, data: Products[]}> {
        const products = await this.productsRepo.find({
            order: {
                createdAt: 'DESC',
            },
        });

        return {
            message: "Products fetched successfully",
            count: products.length,
            data: products,
        };
    }

    async search(keyword: string): Promise<{message: string, count: number, data: Products[]}> {
        const products: Products[] = await this.productsRepo.find({
            where: {
                name: Like(`%${keyword}%`)
            }
        });

        return {
            message: `Products containing "${keyword}" fetched successfully`,
            count: products.length,
            data: products
        };
    }

    async findOne(id:number): Promise<{message: string, data:Products}> {
        const product: Products | null = await this.productsRepo.findOne({
            where: {id}
        })

        if(!product)
            throw new NotFoundException(`Product with ID ${id} not found `);

        return {
            message: "Product fetched successfully",
            data: product,
        }
    }

    async findByCategory(category: string): Promise<{message: string, count: number, data: Products[]}> {
        const products: Products[] = await this.productsRepo.find({
            where: {category}
        });

        return {
            message: `Products in ${category} category fetched successfully`,
            count: products.length,
            data: products,
        };
    }

    async create (dto: CreateProductDto): Promise<{message: string, data: Products}> {
        const productEntity = this.productsRepo.create(dto);
        const savedProduct = await this.productsRepo.save(productEntity);

        return {
            message: "Product created successfully",
            data: savedProduct,
        };
    }

    async replace(id: number, dto: UpdateProductDto): Promise<{message: string, data: Products}> {
        await this.findOne(id);

        const productEntity = this.productsRepo.create({
            id,
            ...dto
        });        
        const updated: Products = await this.productsRepo.save(productEntity);

        return {
            message: "Product updated successfully",
            data: updated
        };
    }

    async update(id: number, dto: PartialUpdateProductDto): Promise<{message: string, data: Products}> {
        const { data } = await this.findOne(id);

        const updatedProduct = await this.productsRepo.save({...data, ...dto});
        
        return {
            message: "Product updated successfully",
            data: updatedProduct,
        };
    }

    async toggleActive(id: number): Promise<{message: string, data: Products}> {
        const {data} = await this.findOne(id);

        data.isActive = !data.isActive;

        const updatedProduct = await this.productsRepo.save(data);

        return {
            message: `Product ${updatedProduct.isActive ? "activated" : "deactivated"} successfully`,
            data: updatedProduct,
        }
    }

    async remove(id: number): Promise<{message: string, id: number}> {
        await this.findOne(id);

        await this.productsRepo.delete(id);

        return {
            message: "Product deleted successfully",
            id,
        }
    }
}