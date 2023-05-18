"use strict";

window.onload = () => {

    document.getElementById("btn1").onclick = btn1;
    document.getElementById("btn2").onclick = btn2;
    document.getElementById("btn3").onclick = btn3;
    
};


function btn1(){
    console.log("1");

    const allDivsWithmsgDivClass = document.getElementsByClassName("msgDiv");

    for (let div of allDivsWithmsgDivClass){
        div.style.color = "blue";
    }

}


function btn2(){
    console.log("2");

    let msg2 = document.getElementById("msg2");

    msg2.style.color = "black";

    let alldivs = document.getElementsByTagName("div");

    Array.from(alldivs).forEach((thisDiv) => {
        thisDiv.style.border = "solid 3px yellow"
    });

}


function btn3(){
    console.log("3");

    const allDivsWithmsgDivClass = document.getElementsByClassName("msgDiv");

    for (let div of allDivsWithmsgDivClass){
        div.style.color = "red";
    }

    const theBody = document.getElementsByTagName("body")[0];

    theBody.style.backgroundColor = "orange";

}