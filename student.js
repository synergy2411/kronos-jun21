"use strict";
exports.__esModule = true;
exports.add = exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(name, email) {
        this.name = name;
        this.email = email;
    }
    Student.prototype.sayHello = function () {
        return "Hello " + this.name + ", My Email ID " + this.email;
    };
    return Student;
}());
exports.Student = Student;
function add(x, y) { return x + y; }
exports.add = add;
// TypeScript -> JavaSCript
// Transpilers -> TypeScript Compiler | Babel | Traceur 
// > npm install typescript -g
// sourcemap : true
