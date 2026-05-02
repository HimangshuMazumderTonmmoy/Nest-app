import { IsBoolean, IsInt, IsNotEmpty, IsNumber, IsOptional, IsPositive, isPositive, IsString, Min } from "class-validator";

export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsOptional()
    description: string;

    @IsNumber()
    @IsPositive()
    price: number;

    @IsInt()
    @IsOptional()
    @Min(0)
    stock: number;

    @IsString()
    @IsNotEmpty()
    category: string;

    @IsBoolean()
    @IsOptional()
    isActive: boolean;
}