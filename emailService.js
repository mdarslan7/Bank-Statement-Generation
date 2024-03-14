const nodemailer = require('nodemailer');
const config = require('./config');
const fs = require('fs');

const sendEmail = async (user_email, pdfFilePath) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: config.email.user,
        pass: config.email.password,
    },
  });

  const mailOptions = {
    from: 'your.email@gmail.com', 
    to: user_email, 
    subject: 'Bank Statement',
    text: 'Please find your bank statement attached.',
    attachments: [{ path: pdfFilePath }],
  };

  await transporter.sendMail(mailOptions);

  fs.unlinkSync(pdfFilePath);
};

module.exports = { sendEmail };
