
const express           = require('express');
const router            = express.Router();
router.get('/backend', async (req, res) => {
    //res.send('Hello from route');
    return res.status(400).json('Hello from route');
});

module.exports = router;