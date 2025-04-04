const express = require('express');
const { fileComplaint, getUserComplaints } = require('../controllers/complaintController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', protect, fileComplaint);
router.get('/', protect, getUserComplaints);

module.exports = router;