const Lawyer = require('../models/Lawyer');

exports.getLawyers = async (req, res) => {
  const lawyers = await Lawyer.find();
  res.json(lawyers);
};

exports.addLawyer = async (req, res) => {
  try {
    const lawyer = await Lawyer.create(req.body);
    res.status(201).json(lawyer);
  } catch (err) {
    res.status(500).json({ message: 'Error adding lawyer' });
  }
};