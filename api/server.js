const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());

// GET /photographers
app.get('/', (req, res) => {
    res.json({"msg" : "success"})
})
app.get('/photographers', (req, res) => {
  fs.readFile('db.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read data' });
    }

    const jsonData = JSON.parse(data);
    res.json(jsonData.photographers || []);
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
