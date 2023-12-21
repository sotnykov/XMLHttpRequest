const express = require('express');
const fs = require('fs-extra');
const app = express();

const positions = ['investor', 'manager', 'assistant', 'worker'];

app.use(express.static(__dirname));

app.get('/positions', async (req, res) => {
  try {
    const data = [];
    for (const position of positions) {
      const fileData = await fs.readFile(`${position}.json`, 'utf8');
      data.push(JSON.parse(fileData));
    }
    res.send(data);
  } catch (err) {
    res.status(500).send('Data acquisition error');
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`The server is running on the port ${PORT}`);
});