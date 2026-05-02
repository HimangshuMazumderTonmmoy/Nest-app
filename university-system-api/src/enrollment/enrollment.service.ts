import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CourseService } from 'src/course/course.service';
import { NotificationService } from 'src/notification/notification.service';

@Injectable()
export class EnrollmentService {
    constructor(
        private courseService: CourseService,

        @Inject(forwardRef(() => NotificationService))
        private readonly notificationService: NotificationService,
    ) {}

    getEnrollments(): {message: string, data: {message: string, student: string, course: {message: string, ID: number}}[]} {
        return { message: 'All enrollments fetched', data: [] }
    }

    enrollStudent(studentName: string, courseId: number): {notification: string, message: string, student: string, course: {message: string, ID: number}} {
        const course: {message: string, ID: number} = this.courseService.getCourseById(courseId);
        const notification: {student: string, notification: string} = this.notificationService.sendNotification(studentName, "Notification sent successfully");
        return {notification: notification.notification, message: "Student enrolled successfully", student: studentName, course: course}
    }
}
