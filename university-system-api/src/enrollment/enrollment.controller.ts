import { Body, Controller, Get, Post } from '@nestjs/common';
import { EnrollmentService } from './enrollment.service';

@Controller('enrollment')
export class EnrollmentController {
    constructor(private enrollmentService: EnrollmentService) {}

    @Get()
    getEnrollments(): {message: string, data: {message: string, student: string, course: {message: string, ID: number}}[]} {
        return this.enrollmentService.getEnrollments();
    }

    @Post()
    enrollStudent(@Body() body: {studentName: string, courseId: number}): {message: string, student: string, course: {message: string, ID: number}} {
        return this.enrollmentService.enrollStudent(body.studentName, body.courseId)
    }
}
