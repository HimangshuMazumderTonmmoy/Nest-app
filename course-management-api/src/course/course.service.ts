import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CourseService {
    getAllCourses(): string {
        return "Get all courses";
    }

    getCourseById(id: number): string {
        return `Get Course with ID: ${id}`;
    }

    createCourse(createCourseDto: CreateCourseDto): string {
        return "Create Course";
    }

    updateCourse(id: number, createCourseDto: CreateCourseDto): string {
        return `Update Course ${id}`;
    }

    patchCourse(id: number, updateCourseDto: UpdateCourseDto): string {
        return `Patch Course ${id}`;
    }

    deleteCourse(id: number): string {
        return `Delete Course ${id}`;
    }
}
