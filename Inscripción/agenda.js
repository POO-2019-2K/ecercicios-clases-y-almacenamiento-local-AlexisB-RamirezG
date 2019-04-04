import Student from "./student.js";

export default class Agenda {
    constructor(tableAgenda) {
        this._tableAgenda = tableAgenda;

        this._allStudents = [];

        this._initTable();
    }

    addStudent(student) {
        let found = this._findStudent(student.studentID);

        if(found >= 0) {
            Swal.fire({
                type: "error",
                title: "Error",
                text: "This student is already registered"
            })
            return;
        }

        if(found === -1) {
            Swal.fire({
                type: "success",
                title: "Success",
                text: "The student was registered succesfully"
            })
        }

        this._displayTable(student);
        localStorage.setItem("students", JSON.stringify(this._allStudents));
        console.log(localStorage.getItem("students"));
    }

    _findStudent(ID) {
        let searchFor = -1;
        this._allStudents.forEach((student, index) => {
            if (student.studentID === ID) {
                searchFor = index;
                return;
            }
        });

        return searchFor;
    }

    _displayTable(student) {
        let row = this._tableAgenda.insertRow(-1);

        let cellID = row.insertCell(0);
        let cellName = row.insertCell(1);

        cellID.innerHTML = student.studentID;
        cellName.innerHTML = student.studentName;

        let objStudent = {
            studentID: student.studentID,
            studentName: student.studentName
        }

        this._allStudents.push(objStudent);
    }

    _initTable() {
        let students = JSON.parse(localStorage.getItem("students"));

        if (students === null) {
            return;
        }

        students.forEach((student, index) => {
            this._displayTable(new Student(student));
        })
    }

}