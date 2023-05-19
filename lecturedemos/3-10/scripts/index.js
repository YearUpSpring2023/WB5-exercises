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
    loadWinningTicketsTable();
};



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