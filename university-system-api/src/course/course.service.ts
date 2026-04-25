import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {
    getAllCourses(): { message: string, data: {name: string, code: string}[] } {
        return { message: "All courses fetched", data: [] }
    }

    getCourseById(id: number): { message: string, ID: number } {
        return {message: "Course fetched", ID: id}
    }

    createCourse(name: string, code: string): {message: string, data: {name: string, code: string}} {
        return {message: "Course created", data: {name, code}}
    }
}
