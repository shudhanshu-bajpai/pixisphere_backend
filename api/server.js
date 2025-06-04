const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const serverless = require('serverless-http');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.json({ msg: 'success' });
});

app.get('/photographers', (req, res) => {
  const filePath = path.join(__dirname, 'db.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read data' });
    }

    try {
      const jsonData = JSON.parse(data);
      res.json(jsonData.photographers || []);
    } catch (parseErr) {
      res.status(500).json({ error: 'Invalid JSON structure' });
    }
  });
});

module.exports = serverless(app);
