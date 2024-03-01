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
        OList.innerHTML += `<li>${arr[x]}  <button class="editButton" onclick = "editTask(${x})"> Edit </button> <button onclick= "deleteTask(${x})" class="deleteButton" > Completed </button> </li> `;
    }
}
button.addEventListener("click", () => {
    if (inputField.value != ``) {
        let textContents = inputField.value.trim();
        storage.push(textContents);
        inputField.value = ``;
    }
    displayarr(storage);
});
const deleteTask = (index) => {
    storage.splice(index, 1);
    displayarr(storage);
};
const editTask = (index) => {
    if (inputField.value != ``) {
        let newText = inputField.value;
        storage.splice(index, 1, newText);
        displayarr(storage);
    }
    displayarr(storage);
};
