const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello TwitAirBot is starting up soon!')
});

app.listen(PORT, () => {
  console.log(`Listening to TwitAirBot at port ${PORT}`);
});