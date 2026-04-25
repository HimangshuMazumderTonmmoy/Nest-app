import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { EnrollmentService } from 'src/enrollment/enrollment.service';

@Injectable()
export class NotificationService {
    constructor(
        @Inject(forwardRef(() => EnrollmentService))
        private readonly enrollmentService: EnrollmentService,
    ) {}

    sendNotification(studentName: string, message: string): {message: string, data: {student: string, notification: string}} {
        return {message: "Notification sent successfully", data: {student: studentName, notification: message}}
    }

    checkEnrollmentAndNotify(studentName: string, courseId: number){
        const enrollments = this.enrollmentService.getEnrollments();
        return this.sendNotification(studentName, `You are enrolled in the course with ID: ${courseId}`);
    }
}
