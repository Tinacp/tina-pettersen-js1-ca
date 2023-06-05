const moviesContainer = document.querySelector(".moviescontainer");

const options = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": "49ad5d6d25msh01f9ee2448254aep1a7c46jsnd802ec911cca",
		"X-RapidAPI-Host": "movie-database-alternative.p.rapidapi.com"
	}
};

const url = "https://movie-database-alternative.p.rapidapi.com/?s=Avengers%20Endgame&r=json&page=1";

async function getData(){
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        const result = data.Search;
        console.log(data);
        console.log(result);

        moviesContainer.innerHTML = "";

        for(let i = 0; i < result.length; i++){
            console.log(result[i].Title);
            console.log(result[i].Year);
            console.log(result[i].Type);

            moviesContainer.innerHTML += `<a href="details.html?id=${result.imdbID}">
            <h1>${result[i].Title}</h1>
            <p>Realese year: ${result[i].Year}</p>
            <p>Type: ${result[i].Type}</p>
        </a>`;

        }


    } catch (error) {
        moviesContainer.innerHTML = "Sorry, an error occured! Try again later.";
        console.log("error occured", error);
    }
}

getData();