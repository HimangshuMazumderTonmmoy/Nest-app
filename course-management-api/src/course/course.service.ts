import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CourseService {
    getAllCourses(): { message: string, data: CreateCourseDto[] } {
        return { message: "All courses fetched successfully", data: [] };
    }

    getCourseById(id: number): { message: string, ID: number } {
        return { message: "Course fetched successfully", ID: id };
    }

    createCourse(createCourseDto: CreateCourseDto): { message: string, data: CreateCourseDto } {
        return { message: "Course created successfully", data: createCourseDto };
    }

    updateCourse(id: number, createCourseDto: CreateCourseDto): { message: string, ID: number, data: CreateCourseDto } {
        return { message: "Course updated successfully", ID: id, data: createCourseDto };
    }

    patchCourse(id: number, updateCourseDto: UpdateCourseDto): { message: string, ID: number, data: UpdateCourseDto } {
        return { message: "Course patched successfully", ID: id, data: updateCourseDto };
    }

    deleteCourse(id: number): { message: string, ID: number } {
        return { message: "Course deleted successfully", ID: id };
    }
}
