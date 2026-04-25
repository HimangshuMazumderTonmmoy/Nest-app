import { EnrollmentService } from "../enrollment/enrollment.service";
export declare class NotificationService {
    private readonly enrollmentService;
    constructor(enrollmentService: EnrollmentService);
    sendNotification(studentName: string, message: string): {
        studentName: string;
        message: string;
        timestamp: string;
    };
    checkEnrollmentAndNotify(studentName: string, courseId: string): {
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
}
