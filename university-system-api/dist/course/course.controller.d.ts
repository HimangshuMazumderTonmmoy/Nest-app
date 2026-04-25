import { CourseService } from './course.service';
export declare class CourseController {
    private readonly courseService;
    constructor(courseService: CourseService);
    getAllCourses(): {
        message: string;
        data: {
            name: string;
            code: string;
        }[];
    };
    getCourseById(id: number): {
        message: string;
        ID: number;
    };
    createCourse(body: {
        name: string;
        code: string;
    }): {
        message: string;
        data: {
            name: string;
            code: string;
        };
    };
}
