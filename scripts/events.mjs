 import * as Calls from "./script.mjs"

export const dropDownitems = document.getElementsByTagName('ul');
export const dropDownEl = dropDownitems[0];
export const articleEl = document.getElementById('main');

// create event listener for a change or click on the drop-down menu item

dropDownEl.addEventListener('click', itemClick);

function itemClick(e){
    console.log(e.target.id);
    Calls.getGame(e.target.id);
    
}




