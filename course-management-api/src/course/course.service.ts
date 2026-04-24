import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {
    getAllCourses(): string {
        return "Get all courses";
    }

    getCourseById(id: number): string {
        return `Get Course with ID: ${id}`;
    }

    createCourse(): string {
        return "Create Course";
    }

    updateCourse(id: number): string {
        return `Update Course ${id}`;
    }

    patchCourse(id: number): string {
        return `Patch Course ${id}`;
    }

    deleteCourse(id: number): string {
        return `Delete Course ${id}`;
    }
}
