export declare class CourseService {
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
    createCourse(name: string, code: string): {
        message: string;
        data: {
            name: string;
            code: string;
        };
    };
}
