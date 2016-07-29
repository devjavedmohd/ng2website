"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var courses_service_1 = require('./courses.service');
var CoursesComponent = (function () {
    function CoursesComponent(coursesService) {
        this.title = "The title of Courses page";
        this.courses = coursesService.getCourses();
    }
    CoursesComponent = __decorate([
        core_1.Component({
            selector: 'courses',
            template: "\n        <h1>Courses</h1>\n        <p>{{title}}</p>\n        <ul>\n            <li *ngFor=\"let course of courses\">\n                <span>{{course}}</span>\n            </li>\n        </ul>\n    ",
            providers: [courses_service_1.CoursesService]
        }), 
        __metadata('design:paramtypes', [courses_service_1.CoursesService])
    ], CoursesComponent);
    return CoursesComponent;
}());
exports.CoursesComponent = CoursesComponent;
//# sourceMappingURL=courses.component.js.map