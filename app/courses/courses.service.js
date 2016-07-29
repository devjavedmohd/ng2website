"use strict";
var CoursesService = (function () {
    function CoursesService() {
    }
    CoursesService.prototype.getCourses = function () {
        return ["Course1", "Course2", "Course3"];
    };
    return CoursesService;
}());
exports.CoursesService = CoursesService;
//# sourceMappingURL=courses.service.js.map