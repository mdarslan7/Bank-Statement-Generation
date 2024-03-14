const pdfkit = require('pdfkit');
const fs = require('fs');

const generatePDF = transactions => {
  const pdfContent = new pdfkit();

  pdfContent.fontSize(16).text('Bank Statement', { align: 'center' });
  pdfContent.moveDown(0.5);

  pdfContent.fontSize(12).text(`Date Range: ${transactions[0].date_of_transaction} - ${transactions[transactions.length - 1].date_of_transaction}`, { align: 'center' });
  pdfContent.moveDown(0.5);

  transactions.forEach(transaction => {
    pdfContent.text(`${transaction.date_of_transaction} - $${transaction.amount}`);
  });
  pdfContent.moveDown(1);

  pdfContent.fontSize(8).text(`Generated on: ${new Date().toLocaleString()}`, { align: 'center' });

  const pdfFilePath = `statement_${Date.now()}.pdf`;
  
  pdfContent.pipe(fs.createWriteStream(pdfFilePath));
  pdfContent.end();

  return pdfFilePath;
};

module.exports = { generatePDF };
