"use strict";
let inputField = document.getElementById("inputField");
let button = document.getElementById("button");
let list = document.getElementById("list");
let OList = document.getElementById("OList");
let storage = [];
// function displayText(){
//     let textContents = inputField.value.trim()
//     storage.push(textContents)
// }
function displayarr(arr) {
    OList.innerHTML = '';
    for (let x = 0; x < arr.length; x++) {
        OList.innerHTML += `<li>${arr[x]} </li>`;
    }
}
button.addEventListener("click", () => {
    let textContents = inputField.value.trim();
    storage.push(textContents);
    displayarr(storage);
});
