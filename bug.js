const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//Uncommon Error: Unexpected token } in JSON at position X
//This error can occur when sending a JSON response that is not properly formatted or contains unexpected characters.
//It happens when the server attempts to parse an invalid JSON string.

//Example of a problematic response:
//app.get('/data', (req, res) => {
//  res.json({ data: 'some data', extra: } ); //Missing closing quote and unexpected } causes error
//});

//Solution:
//Always double-check JSON formatting for correct syntax(quotes, brackets, commas)
//Use a JSON validator to check for errors before sending the response.