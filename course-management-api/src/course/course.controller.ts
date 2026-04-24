import { Body, Controller, Delete, Get, Param, Patch, Post, Put, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { CourseService } from './course.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { FilesInterceptor } from '@nestjs/platform-express';

@Controller('course')
export class CourseController {
    constructor(private readonly courseService: CourseService) { }

    @Get()
    getAllCourses(): { message: string, data: CreateCourseDto[] } {
        return this.courseService.getAllCourses();
    }

    @Get(':id')
    getCourseById(@Param('id') id: number): { message: string, ID: number } {
        return this.courseService.getCourseById(id);
    }

    @Post()
    createCourse(@Body() createCourseDto: CreateCourseDto): { message: string, data: CreateCourseDto } {
        return this.courseService.createCourse(createCourseDto);
    }

    @Post(':id/upload')
    @UseInterceptors(FilesInterceptor('files', 10))
    uploadCourseMaterial(@UploadedFiles() files: Express.Multer.File[]) {
        return {
            message: 'File uploaded successfully',
            filename: files.map(file => file.originalname),
        };
    }

    @Put(':id')
    updateCourse(@Param('id') id: number, @Body() createCourseDto: CreateCourseDto): { message: string, ID: number, data: CreateCourseDto } {
        return this.courseService.updateCourse(id, createCourseDto);
    }

    @Patch(':id')
    patchCourse(@Param('id') id: number, @Body() updateCourseDto: UpdateCourseDto): { message: string, ID: number, data: UpdateCourseDto } {
        return this.courseService.patchCourse(id, updateCourseDto);
    }

    @Delete(':id')
    deleteCourse(@Param('id') id: number): { message: string, ID: number } {
        return this.courseService.deleteCourse(id);
    }
}
