const express = require('express');
const router = express.Router();
const {
  createStudent,
  getAllStudents,
  searchStudents,
  getStudentById,
  updateStudent,
  patchStudent,
  deleteStudent,
  deactivateStudent,
} = require('../controllers/studentController');

// Search must come BEFORE /:id to avoid "search" being treated as an id
router.get('/search', searchStudents);

router.post('/', createStudent);
router.get('/', getAllStudents);
router.get('/:id', getStudentById);
router.put('/:id', updateStudent);
router.patch('/:id/deactivate', deactivateStudent);
router.patch('/:id', patchStudent);
router.delete('/:id', deleteStudent);

module.exports = router;
