import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { CourseService } from './course.service';
import { CreateCourseDto } from './dto/create-course.dto';

@Controller('course')
export class CourseController {
    constructor(private readonly courseService: CourseService) { }

    @Get()
    getAllCourses(): string {
        return this.courseService.getAllCourses();
    }

    @Get(':id')
    getCourseById(@Param('id') id: number): string {
        return this.courseService.getCourseById(id);
    }

    @Post()
    createCourse(@Body() createCourseDto: CreateCourseDto): string {
        return this.courseService.createCourse(createCourseDto);
    }

    @Put(':id')
    updateCourse(@Param('id') id: number, @Body() createCourseDto: CreateCourseDto): string {
        return this.courseService.updateCourse(id, createCourseDto);
    }

    @Patch(':id')
    patchCourse(@Param('id') id: number): string {
        return this.courseService.patchCourse(id);
    }

    @Delete(':id')
    deleteCourse(@Param('id') id: number): string {
        return this.courseService.deleteCourse(id);
    }
}
