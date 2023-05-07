"use strict";

let character="X";

const items=document.querySelectorAll(".item");
const btnReset=document.querySelector(".reset");
btnReset.addEventListener("click",reset); 

items.forEach((item)=>{
item.addEventListener("click",()=>{
        if(item.textContent==""){
            item.textContent=character;
            character=character==="X" ? "O" : "X";
            if(item.textContent=="X") item.style.color="red";
            else item.style.color="green";
        }
    });
});



function reset(){
    items.forEach((element)=>{
        element.textContent="";
    });
}

