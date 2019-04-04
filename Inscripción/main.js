import Agenda from "./agenda.js";
import Student from "./student.js";

export default class Main {
    constructor() {
        let agenda = new Agenda(document.querySelector("#agenda"));
        
        document.querySelector("#register").addEventListener("click", () => {
        let studentID = document.querySelector("#studentID").value; 
        let studentName = document.querySelector("#name").value;

        console.log(studentName + studentID);

        let objStudent = {
            studentID: studentID,
            studentName: studentName
        }
        
        let student = new Student(objStudent);

        agenda.addStudent(student);
        })
    }
}

let m = new Main();