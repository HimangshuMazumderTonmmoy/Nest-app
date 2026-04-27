import { CourseService } from "../course/course.service";
import { NotificationService } from "../notification/notification.service";
export declare class EnrollmentService {
    private courseService;
    private readonly notificationService;
    constructor(courseService: CourseService, notificationService: NotificationService);
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
    enrollStudent(studentName: string, courseId: number): {
        notification: string;
        message: string;
        student: string;
        course: {
            message: string;
            ID: number;
        };
    };
}
