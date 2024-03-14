const fs = require('fs');

const getTransactions = (user_email, date1, date2) => {
  const csvData = fs.readFileSync('transactions.csv', 'utf8');
  const rows = csvData.split('\n').map(row => row.split(','));

  const transactions = rows
    .filter(row => row[0] === user_email && row[1] >= date1 && row[1] <= date2)
    .map(row => ({ date_of_transaction: row[1], amount: row[2] }));

  return transactions;
};

module.exports = { getTransactions };
