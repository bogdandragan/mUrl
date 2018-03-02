const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('api works');
    res.send('api works');
})

module.exports = router;
