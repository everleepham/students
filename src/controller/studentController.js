const Student = require('../model/Student');

const getStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const getStudentById = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);

        if (!student) return res.status(404).json({ message: 'Student not found' });
        res.json(student);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const createStudent = async (req, res) => {
    try {
        const student = new Student(req.body);
        await student.save();
        res.status(201).json(student);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const student = await Student.findByIdAndUpdate
        (id, req.body, { new: true });

        if (!student) return res.status(404).json({ message: 'Student not found' });
        res.json(student);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const student = await Student.findByIdAndDelete(id);

        if (!student) return res.status(404).json({ message: 'Student not found' });
        res.json({ message: 'Student deleted successfully' });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getStudents, getStudentById, createStudent, updateStudent, deleteStudent };