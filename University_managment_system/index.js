// class Person{
//     name:string;
//     age:number;
//     constructor(name:string,age:number){
//         this.age=age;
//         this.name=name;
//     }
//     getName(){
//         console.log(this.name);
//     }
// }
// class Student extends Person{
//     id:number;
//     course:Course[]=[];
//     constructor(stu_id:number,name:string,age:number){
//         super(name ,age);
//         this.id=stu_id;
//     }
//     registerForCourses(course:Course){
//         this.course.push(course)
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//     }
// }
// class Instructer extends Person{
//     salary:number;
//     course:Course[]=[];
//     constructor(name:string,age:number,salary:number){
//         super(name,age)
//         this.salary=salary;
//     }
//     assignCourses(course:Course){
//         this.course.push(course);
//     }
// }
// class Course{
//    courseid:number;
//     coursename:string;
//     instructer:Instructer[]=[];
//     student:Student[]=[];
//     constructor(name:string,courseid:number){
//         this.courseid=courseid;
//         this.coursename=name;
//     }
//     addStudent(student:Student){
//         this.student.push(student);
//         st1.registerForCourses(course1);
//     }
//     setInstructor(instructer:Instructer){
//         this.instructer.push(instructer)
//         instructer1.assignCourses(course1)
//     }
// }
// class Department{
//     name:string;
//     course:Course[]=[];
//     constructor(depName:string){
//         this.name=depName;
//     }
//     addCourse(course:Course){
//         this.course.push(course);
//     }
// }
// const st1= new Student(123,"aiman",32)
// const instructer1=new Instructer("ali",67,100000)
// const dep1=new Department("zoology");
// const course1=new Course("computer",879);
// st1.registerForCourses(course1)
// console.log(course1.addStudent(st1));
// course1.setInstructor(instructer1);
// instructer1.assignCourses(course1);
// dep1.addCourse(course1);
// st1.registerForCourses(course1);
// console.log(course1);
// console.log(course1.student);
// console.log(st1.course[0])
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.age = age;
        this.name = name;
    }
    return Person;
}());
;
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, rollnumber) {
        var _this = _super.call(this, name, age) || this;
        _this.courses = [];
        _this.rollNumber = rollnumber;
        return _this;
    }
    Student.prototype.registerCourses = function (course) {
        this.courses.push(course);
    };
    return Student;
}(Person));
var Instructor = /** @class */ (function (_super) {
    __extends(Instructor, _super);
    function Instructor(name, age, salary) {
        var _this = _super.call(this, name, age) || this;
        _this.courses = [];
        _this.salary = salary;
        return _this;
    }
    Instructor.prototype.assignCourse = function (course) {
        this.courses.push(course);
    };
    return Instructor;
}(Person));
;
var std1 = new Student("moiz", 20, 1212);
var std2 = new Student("Ali", 20, 1313);
var instructor1 = new Instructor("waqas", 35, 30000);
var instructor2 = new Instructor("zeeshan", 45, 60000);
var Course = /** @class */ (function () {
    function Course(id, name) {
        this.students = [];
        this.instructors = [];
        this.id = id;
        this.name = name;
    }
    Course.prototype.addStudent = function (stud) {
        this.students.push(stud);
    };
    Course.prototype.setInstructor = function (inst) {
        this.instructors.push(inst);
    };
    return Course;
}());
;
var Department = /** @class */ (function () {
    function Department(name) {
        this.courses = [];
        this.name = name;
    }
    ;
    Department.prototype.addCourse = function (course) {
        this.courses.push(course);
    };
    return Department;
}());
var course1 = new Course(1, "Ai");
var course2 = new Course(2, "Metaverse");
course1.addStudent(std1);
course2.addStudent(std1);
course1.addStudent(std2);
course2.addStudent(std2);
course1.setInstructor(instructor1);
course2.setInstructor(instructor2);
console.log(std1);
console.log(std2);
var d1 = new Department("Computer Science");
d1.addCourse(course1);
console.log(d1.courses[0]);
