const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.get('/data', (req, res) => {
  res.json({ data: 'some data', extra: 'more data' }); //Corrected JSON response
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
//This solution demonstrates how to correct the JSON response. Ensure all keys and values are properly quoted and that brackets and commas are used appropriately.