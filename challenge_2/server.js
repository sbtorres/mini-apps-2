const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/api/history', (req, res) => {
  axios.get('https://api.coindesk.com/v1/bpi/historical/close.json?start=2018-01-01&end=2019-06-25')
    .then((historicalData) => {
      res.status(200).send(historicalData);
    })
    .catch((err) => {
      res.status(404).send(err);
    })
})

app.listen(PORT, () => console.log(`Express Server is now listing on port ${PORT}`));

