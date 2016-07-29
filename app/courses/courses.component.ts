import {Component} from '@angular/core';
import {CoursesService} from './courses.service';


@Component({
    selector: 'courses',
    template: `
        <h1>Courses</h1>
        <p>{{title}}</p>
        <ul>
            <li *ngFor="let course of courses">
                <span>{{course}}</span>
            </li>
        </ul>
    `,
    providers:[CoursesService]
})
export class CoursesComponent{
    title = "The title of Courses page";
    courses;

    constructor(coursesService: CoursesService){
        this.courses = coursesService.getCourses();
    }
}