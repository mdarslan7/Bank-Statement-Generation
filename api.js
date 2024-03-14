const express = require('express');
const router = express.Router();
const database = require('./database');
const pdfGenerator = require('./pdfGenerator');
const emailService = require('./emailService');

router.post('/generateStatement', async (req, res) => {
  const { user_email, date1, date2 } = req.body;

  const transactions = database.getTransactions(user_email, date1, date2);

  const pdfContent = pdfGenerator.generatePDF(transactions);

  await emailService.sendEmail(user_email, pdfContent);

  res.json({ message: 'Statement generated and sent successfully' });
});

module.exports = router;