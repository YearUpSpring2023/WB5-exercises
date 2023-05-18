let kids = [
    { first : "Natalie", last : "Plyers" },
     { first: "Brittany", last: "Ray" },
     { first: "Zachary", last: "Westly" }
    ];


kids.forEach(displayKid);




// for(let kid of kids){
//     displayKid(kid);
// }


function displayKid(kidToDisplay) {
     console.log(kidToDisplay.first + " " + kidToDisplay.last);
 }
    