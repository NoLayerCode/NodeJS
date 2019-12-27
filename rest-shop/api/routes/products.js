const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Product = require('../models/products');

router.get('/', (req, res, next) => {
    Product.find()
        .exec()
        .then(docs => {
            if (docs) {
                console.log(docs);
                if (docs.length >= 0)
                    res.status(200).json(docs);
                else
                    res.status(404).json({
                        message: 'No Data found'
                    });
            } else {
                res.status(404).json({
                    message: 'No Data found'
                });
            }

        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        });
});

router.post('/', (req, res, next) => {
    // const product = {
    //     name: req.body.name,
    //     price: req.body.price
    // }
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    });

    product
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: 'Handling Post req',
                product: product
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });


});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    Product.findById(id)
        .exec()
        .then(doc => {
            if (doc) {
                console.log("from database", doc);
                res.status(200).json(doc);
            } else {
                res.status(404).json({
                    message: 'No Valid ID'
                });
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                error: err
            })
        });
});

router.patch('/:productId', (req, res, next) => {
    const updateOps = {};
    console.log(req.body);
});

router.delete('/:productId', (req, res, next) => {
    Product.remove({ _id: req.params.productId })
        .exec()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });

});

module.exports = router;