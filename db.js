const data = [{id: 1, name: "Batman Figure", rating: 10},
              {id: 2, name: "Toy Car", rating: 8},
              {id: 3, name: "Barbie Doll", rating: 10},
              {id: 4, name: "Water Gun", rating: 20}
            ];

var counter = 5;

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

function findIndexById(id){
    for(var i=0; i<data.length; i++){
        if(data[i].id === id) return i;
    }
}


function remove(id){
    var index = findIndexById(id);
    // console.log("removing index: %d" index);
    if(index >= 0){
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

function listAll(){
    return data;
}

module.exports = {
    add: add,
    findById: findById,
    remove: remove,
    maxRating: maxRating,
    listAll: listAll
};
