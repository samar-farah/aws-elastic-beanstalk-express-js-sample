const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hola, Chelsy. Hice esto con amor para ti. Casi se me olvida; Te QUIERO.'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
