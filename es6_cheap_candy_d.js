"use strict";

let products = [
    { product: "Gummy Worms", price: 5.79 },
    { product: "Plain M&Ms", price: 2.89 },
    { product: "Peanut M&Ms", price: 2.89 },
    { product: "Swedish Fish", price: 3.79 },
    { product: "Laffy Taffy", price: 4.30 },
    { product: "Jolly Rancher", price: 2.10 },
    { product: "Skittles", price: 1.49 },
    { product: "Reeses Pieces", price: 1.28 },
    { product: "Jelly Beans", price: 3.49 },
    { product: "Cotton Candy", price: 3.39 }

];


let cheapCandy = products.filter(function(currentProduct){
    return (currentProduct.price < 4);
});

//we should now have values in cheapCandy if they existed...

let totalCountOfCheapCandy = cheapCandy.length;

for (let i = 0 ; i < totalCountOfCheapCandy ; i++){
    let currentProduct = cheapCandy[i];

    console.log(`The product ${currentProduct.product} costs ${currentProduct.price}`);
}

