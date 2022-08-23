const express = require('express');
const routes = require('./routes')

const app = express();

app.use(express.json())

app.use(routes)


app.listen(3005,() => console.log('Server stared at http://localhost:3005'));