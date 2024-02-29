let inputField = document.getElementById("inputField")! as HTMLInputElement
let button = document.getElementById("button")! as HTMLButtonElement
let list = document.getElementById("list")! as HTMLDListElement
let OList = document.getElementById("OList")! as HTMLOListElement


let storage:string[] = []


// function displayText(){
    
//     let textContents = inputField.value.trim()
//     storage.push(textContents)
    
// }

function displayarr(arr:string[]){
    OList.innerHTML = ''  
    for(let x:number = 0; x <arr.length; x++){
        OList.innerHTML += `<li>${arr[x]} </li>`
    }
}

button.addEventListener("click", ()=>{
    let textContents = inputField.value.trim()
    storage.push(textContents)

    displayarr(storage)
});




