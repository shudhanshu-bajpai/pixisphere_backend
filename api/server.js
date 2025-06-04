const express = require('express');
const fs = require('fs');
const cors = require('cors');
const serverless = require('serverless-http');

const app = express();

app.use(cors());

// Default route
app.get('/', (req, res) => {
    res.json({ msg: "success" });
});

// GET /photographers
app.get('/photographers', (req, res) => {
  fs.readFile(__dirname + '/db.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read data' });
    }

    const jsonData = JSON.parse(data);
    res.json(jsonData.photographers || []);
  });
});

// Don't use app.listen() on Vercel
module.exports = serverless(app);
