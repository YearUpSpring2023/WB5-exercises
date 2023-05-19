"use strict";

let imageFiles = [
    { name: "images/11-367x267.jpg", description: "Landscape 1" },
    { name: "images/12-367x267.jpg", description: "Landscape 2" },
    { name: "images/13-367x267.jpg", description: "Landscape 3" },
    { name: "images/14-367x267.jpg", description: "Landscape 4" },
    { name: "images/15-367x267.jpg", description: "Landscape 5" },
    { name: "images/16-367x267.jpg", description: "Landscape 6" },
    { name: "images/17-367x267.jpg", description: "Landscape 7" },
    { name: "images/18-367x267.jpg", description: "Landscape 8" },

];

const imagesDropdown = document.getElementById("imagesDropdown");
const btnAdd = document.getElementById("btnAdd");
const btnClear = document.getElementById("btnClear");
const divImages = document.getElementById("divImages");


window.onload = () => {

    btnAdd.onclick = onBtnAddClick;
    btnClear.onclick = onBtnClearClick;

    for(let imageFile of imageFiles){
        let newOption = new Option(imageFile.description, imageFile.name);
        imagesDropdown.appendChild(newOption);
    }
};

function onBtnAddClick(){
    let selectedImagePath = imagesDropdown.value;
    let newImageTag = document.createElement("img");
    newImageTag.src = selectedImagePath;
    
    divImages.appendChild(newImageTag);
}

function onBtnClearClick(){
    divImages.innerHTML = "";
}

