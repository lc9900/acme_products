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

router.get('/', function(req, res){
    res.render('products', {products: db.listAll()});
});

router.post('/', function(req, res){
    var name = req.body.name;
    var rating = req.body.rating;
    if( name && rating) {
        db.add(name, rating);
        res.redirect('/products');
    }
    else{
        res.render('error');
    }
});


