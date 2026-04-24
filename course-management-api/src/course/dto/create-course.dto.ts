import { IsNotEmpty, IsNumber, IsOptional, IsString, Matches, Max, Min } from 'class-validator';

export class CreateCourseDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @Matches(/^[A-Z]{2,4}\d{3}$/, {
    message: 'Course code must be 2-4 uppercase letters followed by 3 digits (e.g., CS101, SWE221)',
  })
  code: string;

  @IsString()
  @IsNotEmpty()
  instructor: string;

  @IsNumber()
  @Min(1)
  @Max(6)
  credits: number;

  @IsString()
  @IsOptional()
  description?: string;
}