


// const config = axios.create({
//     method: "get",
//     baseURL: "https://free-to-play-games-database.p.rapidapi.com/api",
//     headers: {
//         "Content-Type": "application/json",
//         'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
//         'x-rapidapi-key': 'cf5b37b548msh30892f79b9a138bp14ab4cjsn651fbf823ad7'
//     }
// });

const config = {
    method: "get",
    baseURL: "https://free-to-play-games-database.p.rapidapi.com/api",
    headers: {
        "Content-Type": "application/json",
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
        'x-rapidapi-key': 'cf5b37b548msh30892f79b9a138bp14ab4cjsn651fbf823ad7'
    }
};

// (async function getData() {
//     try {
//         let response = await config.get('/games');
//         // https://free-to-play-games-database.p.rapidapi.com/api/games'
//         let request = response.data;
//         console.log(request);

//     } catch (err) {
//         console.error(`Error - ${err.message}`);
//     }
// })();

(async function getData() {
    try {
        let response = await axios.get('/games', config);
        // https://free-to-play-games-database.p.rapidapi.com/api/games'
        let request = response.data;
        console.log(request);

    } catch (err) {
        console.error(`Error - ${err.message}`);
    }
})();


const container = document.getElementById('container');
const btn = document.getElementById('btn');

// const options = {
//     method: 'GET',
//     url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
//     params: { id: '452' },
//     headers: {
//         'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
//     }
// };

const config2 = {
    ...config,
    params: { id: '109'}
};


container.addEventListener('click', eHandle);

function eHandle(e) {
    if (e.target == btn) {
       fetchData();
    }


};





// const options = {
//   method: 'GET',
//   url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
//   params: {id: '452'},
//   headers: {
//     'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
//   }
// };

async function fetchData() {
    try {
        const response = await axios.request("/game", config2);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
};


