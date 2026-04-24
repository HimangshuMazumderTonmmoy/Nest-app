import { BadRequestException, Body, Controller, Delete, Get, Param, Patch, Post, Put, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { CourseService } from './course.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

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
    @UseInterceptors(FilesInterceptor('files', 10,
        {
            storage: diskStorage({
                destination: './src/uploads',
                filename: (req, file, callback) => {
                    const uniqueName = Date.now() + '-' + Math.round(Math.random() * 1e9);
                    callback(null, `${uniqueName}${extname(file.originalname)}`);
                },
            }),

            fileFilter: (req, file, callback) => {
                if (!file.originalname.match(/\.(jpg|jpeg|png|pdf)$/)) {
                    return callback(new BadRequestException('Invalid file type'), false);
                }
                callback(null, true);
            },

            limits: {
                fileSize: 1024 * 1024 * 2, // 2MB
            }
        }
    ))
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
