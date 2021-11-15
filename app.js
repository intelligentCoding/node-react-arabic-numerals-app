const express = require('express');
const bodyParser = require('body-parser');
const createNumeralsRoutes = require('./routes/numerals-routes');

const app = express();

app.use('/api/numerals', createNumeralsRoutes);

//error middleweare 
app.use((error, req, res, next) => {
    if(res.headerSent){
        return next(error);
    }
    res.status(error.code || 500);
    res.json({message: error.message || "OOPS an unknow error occured!"})
});

app.listen(5000);