const express = require('express');
const bodyParser = require('body-parser');
const createNumeralsRoutes = require('./routes/numerals-routes');

const app = express();

app.use(createNumeralsRoutes);

app.listen(5000);