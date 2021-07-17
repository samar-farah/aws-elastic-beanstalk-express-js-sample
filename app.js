const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hola mundo! Este es mi primer pipeline con AWS. Provando pipeline'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
