import { EnrollmentService } from './enrollment.service';
export declare class EnrollmentController {
    private enrollmentService;
    constructor(enrollmentService: EnrollmentService);
    getEnrollments(): {
        message: string;
        data: {
            message: string;
            student: string;
            course: {
                message: string;
                ID: number;
            };
        }[];
    };
    enrollStudent(body: {
        studentName: string;
        courseId: number;
    }): {
        message: string;
        student: string;
        course: {
            message: string;
            ID: number;
        };
    };
}
