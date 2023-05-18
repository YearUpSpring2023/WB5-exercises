



let numbers = [7, 9, 64, 60, 12, 13, 65, 62];
let firstValOver60 = null;

for(let number of numbers){
    if(number > 60){
        firstValOver60 = number;
        break;
    }
}





if (firstValOver60 != undefined) {
    console.log(firstValOver60);
}
else {
    console.log("No values over 60");
}