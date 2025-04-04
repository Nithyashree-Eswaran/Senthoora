const Complaint = require('../models/Complaint');

exports.fileComplaint = async (req, res) => {
  try {
    const complaint = await Complaint.create({ ...req.body, user: req.user.id });
    res.status(201).json(complaint);
  } catch (err) {
    res.status(500).json({ message: 'Complaint filing failed' });
  }
};

exports.getUserComplaints = async (req, res) => {
  const complaints = await Complaint.find({ user: req.user.id });
  res.json(complaints);
};
