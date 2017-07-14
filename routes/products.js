const express = require('express');
const path = require('path');
const router = express.Router();
const db = require('../db');

module.exports = router;

router.get('/:id', function(req, res){
    var product = db.findById(req.params.id);
    res.render('product', product);
});
