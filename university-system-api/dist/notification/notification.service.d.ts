import { EnrollmentService } from "../enrollment/enrollment.service";
export declare class NotificationService {
    private readonly enrollmentService;
    constructor(enrollmentService: EnrollmentService);
    sendNotification(studentName: string, message: string): {
        message: string;
        data: {
            student: string;
            notification: string;
        };
    };
    checkEnrollmentAndNotify(studentName: string, courseId: number): {
        message: string;
        data: {
            student: string;
            notification: string;
        };
    };
}
