"use strict";

let winningTickets = [
    { tixNum: "1001001", expires: "2022-09-05", prize: 100000 },
    { tixNum: "1298711", expires: "2022-10-10", prize: 250000 },
    { tixNum: "1298725", expires: "2022-11-10", prize: 210000 },
    { tixNum: "1298799", expires: "2022-12-02", prize: 290000 },
    { tixNum: "1298711", expires: "2022-10-10", prize: 310000 },
    { tixNum: "1299234", expires: "2022-10-10", prize: 500000 },
    { tixNum: "1302301", expires: "2022-10-10", prize: 1000000 },

];

window.onload = function () {
    btnJokeSearch.onclick = onBtnJokeSearchClick;

    loadWinningTicketsTable();
};

const txtSearch = document.getElementById("txtSearch") ;
const btnJokeSearch = document.getElementById("btnJokeSearch");
const tableJokesBody = document.getElementById("tableJokesBody");


function loadWinningTicketsTable() {
    // Find the table
    let table = document.getElementById("winningTicketsTbl");
    // loop through the array
   
    for (let ticket of winningTickets) {
        buildTicketRow(table, ticket)
    }
}


function buildTicketRow(table, ticket){
            // Create an empty <tr> element and add it to the last 
        // position of the table
        let row = table.insertRow(-1);
        // Create new cells (<td> elements) and add text
        let cell1 = row.insertCell(0);
        cell1.innerHTML = ticket.tixNum;
        let cell2 = row.insertCell(1);
        cell2.innerHTML = "$" + ticket.prize.toFixed(2);
        let cell3 = row.insertCell(2);
        cell3.innerHTML = ticket.expires;
};


    
function onBtnJokeSearchClick(){
    let searchText = txtSearch.value;

    tableJokesBody.innerHTML = "";

    let searchResults = jokes.filter( j => j.toUpperCase().includes(searchText.toUpperCase()));

    for(let result of searchResults){
        addJokeToTable(result);
    }

}

var jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why did the math book look sad? Because it had too many problems.",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why don't some fish play piano? Because you can't tuna fish!",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
    "What do you call cheese that isn't yours? Nacho cheese!",
    "Why did the bicycle fall over? Because it was two tired!",
    "What do you call a bear with no teeth? A gummy bear!",
    "Why was the computer cold at the office? It left its Windows open!",
    "What do you call a fake noodle? An impasta!",
    "Why couldn't the leopard play hide and seek? Because he was always spotted.",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "Why did the stadium get hot after the game? All of the fans left.",
    "Why don't eggs tell each other jokes? They might crack up!",
    "What do you call a snowman with a six pack? An abdominal snowman.",
    "Why couldn't the pony sing a lullaby? She was a little horse.",
    "What's a astronaut's favorite part of a computer? The space bar.",
    "Why was the math test so happy? Because it felt really positive!",
    "Why couldn't the bicycle find its way home? It lost its bearings.",
    "Why did the cookie go to the nurse? Because it felt crumby.",
    "Why did the computer go to the doctor? It had a bad byte.",
    "Why did the music note like the tightrope walker? He had perfect balance.",
    "Why did the mushroom go to the party? Because he was a fun guy.",
    "Why did the can crusher quit his job? Because it was soda pressing.",
    "Why did the picture go to jail? Because it was framed.",
    "What did one hat say to the other? You stay here. I’ll go on ahead.",
    "Why don’t we ever tell secrets on a farm? Because the potatoes have eyes, the corn has ears, and the beans stalk.",
    "Why don’t scientists ever trust a lion? Because they might lion about their findings!",
    "Why do we never give Elsa a balloon? Because she will let it go.",
    "Why did the golfer carry an extra shirt? In case he got a hole in one.",
    "What do you call a fish without eyes? Fsh.",
    "Why do bananas have to put on sunscreen before they go to the beach? Because they might peel.",
    "Why did the physics book become an entrepreneur? Because it had the potential!",
    "Why did the power cord break up with the outlet? There was no spark.",
    "Why don't programmers like nature? It has too many bugs.",
    "Why was the JavaScript book always feeling sad? Because it always had a lot of problems to solve.",
    "Why did the web developer walk out of the meeting? Too many cookies.",
    "Why did the programmer quit his job? Because he didn't get arrays.",
    "What did the grape do when it got stepped on? Nothing, it just let out a little wine.",
    "Why do bees have sticky hair? Because they use a honeycomb.",
    "What do you call a factory that makes okay products? A satisfactory.",
    "What do you get when you cross a snowman and a vampire? Frostbite.",
    "Why can't a nose be 12 inches long? Because then it would be a foot.",
    "What did one ocean say to the other ocean? Nothing, they just waved.",
    "What do you call a snowman with a six-pack? An abdominal snowman.",
    "Why do we tell actors to break a leg? Because every play has a cast.",
    "Why did the teddy bear say no to dessert? Because she was already stuffed.",
    "Why do cows have hooves instead of feet? Because they lactose.",
    "What did the grape say when it got stepped on? Nothing - but it let out a little whine.",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
    "Why couldn't the bicycle stand up by itself? It was two tired.",
    "Why did the scarecrow win an award? Because he was outstanding in his field.",
    "Why did the mushroom go to the party? Because he was a fun-guy."
];



function addJokeToTable(joke){
   let newRow = tableJokesBody.insertRow(-1);
   let newCell = newRow.insertCell(0);
   newCell.innerHTML = joke;
}
