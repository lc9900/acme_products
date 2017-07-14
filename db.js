const data = [{id: 1, name: "Batman Figure", rating: 10}];

var counter = 2;

function add(name, rating){
    var newProduct = {
        id: counter++,
        name: name,
        rating: rating
    };
    data.push(newProduct);
};

// Base on product ID, returns the product
function findById(id){
    for(var i=0; i<data.length; i++){
        if(data[i].id === id) return data[i];
    }
    return false;
};

function findByName(name){};

function modify(){};

function remove(id){
    var index = findById(id).id;

    if(index){
        data.splice(index, 1);
        return true;
    }
    else return false;
};

// Returns data[index] which is an object who has the max rating in all products
function maxRating(){
    var rate = 0, index = '';
    for(var i=0; i<data.length; i++){
        if(data[i].rating > rate){
            rate = data[i].rating;
            index = i;
        }
    }
    return data[index];
};

module.exports = {
    add: add,
    findById: findById,
    findByName: findByName,
    modify: modify,
    remove: remove,
    maxRating: maxRating
};
