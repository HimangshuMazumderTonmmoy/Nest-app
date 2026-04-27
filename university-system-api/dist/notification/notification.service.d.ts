import { EnrollmentService } from "../enrollment/enrollment.service";
export declare class NotificationService {
    private readonly enrollmentService;
    constructor(enrollmentService: EnrollmentService);
    sendNotification(studentName: string, message: string): {
        student: string;
        notification: string;
    };
    checkEnrollmentAndNotify(studentName: string, courseId: number): {
        student: string;
        notification: string;
    };
}
