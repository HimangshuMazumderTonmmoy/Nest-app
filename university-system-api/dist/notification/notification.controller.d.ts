import { NotificationService } from './notification.service';
export declare class NotificationController {
    private readonly notificationService;
    constructor(notificationService: NotificationService);
    sendNotification(body: {
        studentName: string;
        message: string;
    }): {
        student: string;
        notification: string;
    };
    checkEnrollmentAndNotify(body: {
        studentName: string;
        courseId: number;
    }): {
        student: string;
        notification: string;
    };
}
