import * as Events from "./events.mjs"



// HTML and CSS
// Radio buttons of some sort of filter options above the dropdown. 

// JS
// DOM element variables
// const dropDownitems = document.getElementsByTagName('ul');
// const dropDownEl = dropDownitems[0]



// default config object for axios requests

let config = {
    method: "get",
    baseURL: "https://free-to-play-games-database.p.rapidapi.com/api",
    params: {
        'sort-by': 'alphabetical'
    },
    headers: {
        "Content-Type": "application/json",
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
        'x-rapidapi-key': 'cf5b37b548msh30892f79b9a138bp14ab4cjsn651fbf823ad7'
    }
};

// axios request to grab games and attach them to the dropdown menu on load of the page

(async function getData() {
  try {
    const response = await axios.get('/games', config);
    const result = response.data;
    console.log(result);
    // loop to iterate through all games returned and place them in a li and append it to the ul that is the drop-down menu
    for (let item of result) {
      let listEl = document.createElement("li");
      listEl.innerHTML = `<button class="dropdown-item" id=${item.id} type="button">${item.title}</button>`;
      Events.dropDownEl.appendChild(listEl);
    }
  } catch (err) {
    console.error(`Error - ${err.message}`);
  }
})();


// async function that requests the game info for a specific game from the game selected

export async function getGame(id) {
    try{    
        config.params.id = id;
        const config2 = config;
        const response = await axios.get('/game', config2);
        const result = response.data;
        console.log(result);
        let cardEl = document.createElement("div");
        cardEl.setAttribute("class", "m-4");
        cardEl.innerHTML = `<div class="card" style="width: 300px;">
                                <img src="${result.thumbnail}" class="card-img-top"
                                    alt="Sample Image">
                                <div class="card-body text-center">
                                    <h5 class="card-title">${result.title}</h5>
                                    <p class="card-text">${result.description}</p>
                                    <a href="${result.game_url}" class="btn btn-primary">Game Url</a>
                                </div>
                            </div>`;
        Events.articleEl.appendChild(cardEl);

        

    } catch(err){
        console.error(`Error - ${err.message}`);
    }
}



// function to clear cards

export function clearCard(){
    Events.articleEl.innerHTML = '';
}



