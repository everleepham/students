const express = require("express");

const { getStudent, getStudentById, createStudent, updateStudent, deleteStudent } = require("../controller/studentController");

const router = express.Router();

router.get("/", getStudents);
router.get("/:id", getStudentById);
router.post("/", createStudent);
router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent);

module.exports = router;