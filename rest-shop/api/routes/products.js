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

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if (id === '5') {
        res.status(200).json({
            message: 'product id',
            id: id,
        });
    }
    else {
        res.status(200).json({
            message: 'product id not found'
        });
    }
});

router.patch('/:productId', (req, res, next)=>{
    res.status(200).json({
        message: 'product updated'
    });
});

router.delete('/:productId', (req, res, next)=>{
    res.status(200).json({
        message: 'product updated'
    });
});

module.exports = router;