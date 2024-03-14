const express = require('express');
const api = require('./api');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/api', api);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
