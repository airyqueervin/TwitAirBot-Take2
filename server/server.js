const express = require('express');
const router = require('./routes.js');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));
app.use('/bundles', express.static(path.join(__dirname, '../bundles')));

// app.use('/', router);

app.get('/test', (req, res) => {
  res.send('Hello TwitAirBot is starting up soon!')
});



app.listen(PORT, () => {
  console.log(`Listening to TwitAirBot at port ${PORT}`);
});