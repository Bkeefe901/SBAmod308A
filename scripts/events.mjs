 import * as Calls from "./script.mjs"

export const dropDownitems = document.getElementsByTagName('ul');
export const dropDownEl = dropDownitems[0];
export const btnHolderEl = document.getElementById('btnHolder');
export const articleEl = document.getElementById('main');
export const clearBtnEl = document.getElementById('clearBtn');

// create event listener for a change or click on the drop-down menu item

dropDownEl.addEventListener('click', itemClick);

function itemClick(e){
    console.log(e.target.id);
    Calls.getGame(e.target.id);
    
}




// Event handling for the clearBtn

btnHolderEl.addEventListener('click', clearSelect);

function clearSelect(e){
    //console.log(e.target.id);
    if(e.target.id == 'clearBtn'){
        Calls.clearCard();
    } else{
        return;
    }
}