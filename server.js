const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const path = require('path');
const productsRoute = require('./routes/products');
const db = require('./db');


app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true, express: app});

app.use('/vendor', express.static(path.join(__dirname, 'node_modules')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Overriding methods with _method variable in the header
// Base on document, the default method this will replace is POST
app.use(methodOverride('_method'));

var port = process.env.PORT || 3000;
const server = app.listen(port, function(){
   console.log("server listening on port %d", port);
});

// All /products urls will be handled by productsRoute
app.use('/products', productsRoute);

app.get('/', function(req, res){
    var product = db.maxRating();
    // var productId = 1;
    // var productName = 'SuperMan Figure';
    res.render('index', {topId: product.id, topName: product.name});
});
