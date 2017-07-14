const express = require('express');
const path = require('path');
const router = express.Router();
const db = require('../db');

module.exports = router;

router.get('/:id', function(req, res){
    var id = parseInt(req.params.id)
    var product = db.findById(id);
    // console.log(product);
    res.render('product', product);
});

router.delete('/:id', function(req, res){
    var id = parseInt(req.params.id)
    var product = db.findById(id);
    db.remove(id);
    res.redirect('/products');
})
