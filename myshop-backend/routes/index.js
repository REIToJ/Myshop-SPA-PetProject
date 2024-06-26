const express = require('express');
const router = express.Router();

router.use('/users', require('./users'));
router.use('/categories', require('./categories'));
router.use('/products', require('./products'));
router.use('/orders', require('./orders'));
router.use('/reviews', require('./reviews'));

module.exports = router;
