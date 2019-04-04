import Student from "./student.js";

export default class Agenda {
    constructor(tableAgenda) {
        this._tableAgenda = tableAgenda;
        this._attendances = 0;
        this._allStudents = [];

        this._initTable();
    }

    giveAttendance(student) {
        this._findAttendant(student.studentID);
    }
    
    _findAttendant(ID) {
        let students = JSON.parse(localStorage.getItem("students"));
        console.log(students);
        let found = -1;

        // Si me da la asistencia pero no sé como ponerla en la tabla :( 
        students.forEach((student, index) => {
            if (student.studentID === ID) {
                student.totalAtt++;
                found++;
                localStorage.setItem("students", JSON.stringify(students));
            }
        });

        if(found < 0) {
            Swal.fire({
                type: "error",
                title: "Error",
                text: "This student is not registered"
            })
            return;
        }
    }

    addStudent(student) {
        let found = this._findStudent(student.studentID);

        if (found >= 0) {
            Swal.fire({
                type: "error",
                title: "Error",
                text: "This student is already registered"
            })
            return;
        }

        if (found === -1) {
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
        let cellAtt = row.insertCell(2);

        cellID.innerHTML = student.studentID;
        cellName.innerHTML = student.studentName;
        cellAtt.innerHTML = student.totalAtt;

        let objStudent = {
            studentID: student.studentID,
            studentName: student.studentName,
            totalAtt: student.totalAtt
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
        });
    }

}