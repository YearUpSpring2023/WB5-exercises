function isOver60(arrayValue) {
    if (arrayValue > 60) {
        return true;
    }
    else {
        return false;
    }
}


let numbers = [7, 9, 64, 60, 12, 13, 67, 66];


let allOver60 = numbers.filter(isOver60);


// returns an array containing [64, 67, 66]
if (allOver60.length > 0) {
    console.log(allOver60); // displays the array
}
else {
    console.log("No values over 60");
}
