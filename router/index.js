const express = require('express');
const router = express.Router();
const excelfile = require('../controller/excelfileupload')
router.use('/user',require('./user'));
router.use('/product',require('./product'));
router.use('/seller',require('./seller'));
router.use('/order',require('./order'));
router.get('/upload',excelfile.upload);


module.exports = router;