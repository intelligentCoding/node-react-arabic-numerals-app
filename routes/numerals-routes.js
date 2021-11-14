const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log('convert numerals');
    res.json({message: 'converted'});
})


module.exports = router;