const { getBotReply } = require('../services/chatbotService');

exports.chatWithBot = async (req, res) => {
  const { message } = req.body;
  const reply = await getBotReply(message);
  res.json({ reply });
};
