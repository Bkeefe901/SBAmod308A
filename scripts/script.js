


const config = axios.create({
    method: "get",
    baseURL: "https://free-to-play-games-database.p.rapidapi.com/api",
    headers: {
        "Content-Type": "application/json",
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
        'x-rapidapi-key': 'cf5b37b548msh30892f79b9a138bp14ab4cjsn651fbf823ad7'
    }
});

// const options = {
//     method: "get",
//     baseURL: "https://www.freetogame.com/api",
//     headers: {
//         "Content-Type": "application/json",
//         'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
//         'x-rapidapi-key': 'cf5b37b548msh30892f79b9a138bp14ab4cjsn651fbf823ad7'
//     }
// };

(async function getData() {
    try {
        let response = await config.get('/games');
        // https://free-to-play-games-database.p.rapidapi.com/api/games'
        let request = response.data;
        console.log(request);

    } catch (err) {
        console.error(`Error - ${err.message}`);
    }
})(); 


const options = {
  method: 'GET',
  url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
  params: {id: '452'},
  headers: {
    'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
  }
};

(async function fetchData() {
	try {
		const response = await axios.request(options);
		console.log(response.data);
	} catch (error) {
		console.error(error);
	}
});

// fetchData();
