const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET req'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Handling Post req'
    });
});

router.get('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'order id',
        id: req.params.orderId,
    });
});

router.patch('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'order updated'
    });
});

router.delete('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'order updated'
    });
});

module.exports = router;