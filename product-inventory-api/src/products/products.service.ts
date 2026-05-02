import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from './entities/products.entity';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dtos/create-product.dto';

@Injectable()
export class ProductsService {}