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
                studentName: studentName,
                totalAtt: 0
            }

            let student = new Student(objStudent);

            agenda.addStudent(student);
        });

        document.querySelector("#attendance").addEventListener("click", () => {
            let studentID = document.querySelector("#studentID").value;
            let objStudent = {
                studentID: studentID,
            }
            let student = new Student(objStudent);
            agenda.giveAttendance(student);
        })
    }
}

let m = new Main();