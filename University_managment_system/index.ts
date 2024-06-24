class Person{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.age=age;
        this.name=name;
    }
    getName(){
        console.log(this.name);
    }
}
class Student extends Person{
    id:number;
    course:Course[]=[];
    constructor(stu_id:number,name:string,age:number){
        super(name ,age);
        this.id=stu_id;
    }
    registerForCourses(course:Course){
        this.course.push(course)
       
    
    }

}
class Instructer extends Person{
    salary:number;
    course:Course[]=[];
    constructor(name:string,age:number,salary:number){
        super(name,age)
        this.salary=salary;
    }
    assignCourses(course:Course){
        this.course.push(course);

    }
}
class Course{
   courseid:number;
    coursename:string;
    instructer:Instructer[]=[];
    student:Student[]=[];
    constructor(name:string,courseid:number){
        this.courseid=courseid;
        this.coursename=name;
        
    }
    addStudent(student:Student){
        this.student.push(student);
        st1.registerForCourses(course1);
    }
    setInstructor(instructer:Instructer){
        this.instructer.push(instructer)
        instructer1.assignCourses(course1)
    }

}
class Department{
    name:string;
    course:Course[]=[];
    constructor(depName:string){
        this.name=depName;
    }
    addCourse(course:Course){
        this.course.push(course);

    }
}

const st1= new Student(123,"aiman",32)
const instructer1=new Instructer("ali",67,100000)

const dep1=new Department("zoology");
const course1=new Course("computer",879);
st1.registerForCourses(course1)

console.log(course1.addStudent(st1));
course1.setInstructor(instructer1);
instructer1.assignCourses(course1);
dep1.addCourse(course1);
st1.registerForCourses(course1);
console.log(course1);
console.log(course1.student);
console.log(st1.course[0])




