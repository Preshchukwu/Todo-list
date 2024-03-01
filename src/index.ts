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
        OList.innerHTML += `<li>${arr[x]}  <button class="editButton" onclick = "editTask(${x})"> Edit </button> <button onclick= "deleteTask(${x})" class="deleteButton" > Completed </button> </li> `
    }
}
 



button.addEventListener("click", ()=>{
    if(inputField.value != ``){
        let textContents = inputField.value.trim()
        storage.push(textContents)
        inputField.value = ``
        
    }
    displayarr(storage)
});


const deleteTask = (index:number)=>{
    storage.splice(index, 1)
    displayarr(storage)
}

const editTask =(index:number)=>{
    if(inputField.value != ``){
        let newText = inputField.value
        storage.splice(index,1,newText)
        displayarr(storage)
    } 
    displayarr(storage)            
}


