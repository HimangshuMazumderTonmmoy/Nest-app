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
        
        for (let i = 0; i < enrollments.data.length; i++)
            if (enrollments.data[i].student === studentName && enrollments.data[i].course.ID === courseId)
                return this.sendNotification(studentName, "You are enrolled in " + enrollments.data[i].course.message);
        
        return {message: "Student is not enrolled in the course", data: {student: studentName, notification: ""}}
    }
}
