// HTML and CSS
// Radio buttons of some sort of filter options above the dropdown. 

// JS
// DOM element variable
const dropDownitems = document.getElementsByTagName('ul');
const dropDownEl = dropDownitems[0]

// axios request to grab games and attach them to the dropdown menu on load of the page



const config = {
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



//  const dropDownEl = document.getElementsByTagName('ul');

// let resArray = [];

(async function getData() {
  try {
    const response = await axios.get('/games', config);
    const result = response.data;
    for (let item of result) {
      let listEl = document.createElement("li");
      listEl.innerHTML = `<button class="dropdown-item" id=${item.title} type="button">${item.title}</button>`;
      dropDownEl.appendChild(listEl);
    }
  } catch (err) {
    console.error(`Error - ${err.message}`);
  }
})();






// async function getData() {
//     try {
//         let response = await axios.get('/games', config);
//         // https://free-to-play-games-database.p.rapidapi.com/api/games'
//         let request = response.data;
//         console.log(request);
//         //console.log(request[1].title);
//         // console.log(dropDownEl);
//         // const dropDownEl = document.getElementsByTagName('ul');
//         for(let item of request){

//             resArray.push(item.title);
//             // let dropDownEl = document.getElementsByTagName('ul');
//             // let listEl = document.createElement('li');
//             // listEl.innerHTML = `<button class="dropdown-item" id=${item.title} type="button">${item.title}</button>`;
//             // dropDownEl.appendChild(listEl);


//         }
//         return resArray;

//     } catch (err) {
//         console.error(`Error - ${err.message}`);
//     }
// };

// let resArray = getData();
// console.log(resArray);



// const container = document.getElementById('container');
// const btn = document.getElementById('btn');



const config2 = {
    ...config,
    params: { id: '109'}
};


// container.addEventListener('click', eHandle);

// function eHandle(e) {
//     if (e.target == btn) {
//        fetchData();
//     }
// };



async function fetchData() {
    try {
        const response = await axios.request("/game", config2);
        console.log(response.data);
        const result = response.data;
        const desc = result.description
        console.log(desc);
        
    } catch (error) {
        console.error(error);
    }
};


