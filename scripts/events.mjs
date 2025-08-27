 import * as Calls from "./script.mjs"
 import * as V from "./variables.mjs"


// create event listener for a change or click on the drop-down menu item

V.dropDownEl.addEventListener('click', itemClick);

function itemClick(e){
    console.log(e.target.id);
    Calls.getGame(e.target.id);
    
}




// Event handling for the clearBtn

V.btnHolderEl.addEventListener('click', clearSelect);

function clearSelect(e){
    //console.log(e.target.id);
    if(e.target.id == 'clearBtn'){
        Calls.clearCard();
    } else{
        return;
    }
}