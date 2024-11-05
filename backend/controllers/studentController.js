
const Student = require("../models/student")

const createStudent = async (req, res) => {
    // data get from body
    const { name, age, email } = req.body;

    const student = await Student.create({ name, age, email })

    res.json({ student });
}

const fetchStudents = async (req, res) => {
    const students = await Student.find();
    res.json({ students })
}

const fetchStudentById = async (req, res) => {

    const studentId = req.params.id;

    const student = await Student.findById(studentId);

    res.json({ student });
}

const updateStudent = async (req, res) => {

    // get id from route
    const studentId = req.params.id

    // get data from body
    const { name, age, email } = req.body;

    // update
    await Student.findByIdAndUpdate(studentId, { name, age, email })

    // get updated record & generate res
    const student = await Student.findById(studentId);

    res.json({ student });
}

const deleteStudent = async (req, res) => {

    // get id from route
    const studentId = req.params.id;

    // delete record from db collection
    await Student.deleteOne({ _id: studentId });

    // respond
    res.json({ success: "Record deleted successfully" })
}

module.exports = {
    createStudent, fetchStudents, fetchStudentById, updateStudent, deleteStudent
}