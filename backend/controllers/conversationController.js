const Conversation = require('../models/Conversation');

exports.saveMessage = async (req, res) => {
  const convo = await Conversation.create(req.body);
  res.status(201).json(convo);
};