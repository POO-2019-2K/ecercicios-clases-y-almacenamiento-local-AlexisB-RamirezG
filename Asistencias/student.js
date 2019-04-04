export default class Student {
    constructor(student) {
        this._studentID = student.studentID;
        this._studentName = student.studentName; 
    }

    get studentID() {
        return this._studentID;
    }

    get studentName() {
        return this._studentName;
    }
}