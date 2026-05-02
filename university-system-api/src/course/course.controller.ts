import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CourseService } from './course.service';

@Controller('course')
export class CourseController {
    constructor(private readonly courseService: CourseService) {}

    @Get()
    getAllCourses(): { message: string, data: {name: string, code: string}[] } {
        return this.courseService.getAllCourses();
    }

    @Get(':id')
    getCourseById(@Param('id') id: number): {message: string, ID: number} {
        return this.courseService.getCourseById(id);
    }

    @Post()
    createCourse(@Body() body: {name: string, code: string}): {message: string, data: {name: string, code: string}} {
        return this.courseService.createCourse(body.name, body.code);
    }
}
