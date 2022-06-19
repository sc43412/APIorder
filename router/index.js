const express = require('express');
const router = express.Router();
router.use('/user',require('./user'));
router.use('/product',require('./product'));
router.use('/seller',require('./seller'));


module.exports = router;