const container = document.querySelector(".container");
const title = document.querySelector("title");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const i = params.get("i");
console.log(i);

const options = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": "49ad5d6d25msh01f9ee2448254aep1a7c46jsnd802ec911cca",
		"X-RapidAPI-Host": "movie-database-alternative.p.rapidapi.com"
	}
};

const url = "https://movie-database-alternative.p.rapidapi.com/" + "?r=json&i=" + i ;
console.log(url);


async function movieData(){
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data);

        container.innerHTML = "";
        title.innerHTML = data.Title;


        container.innerHTML =  `<h1>${data.Title}</h1>
                                <p>${data.Plot}</p>
                                <p>Actors: ${data.Actors}</p>`;
        

    } catch (error) {
        container.innerHTML = "Sorry, an error occured! Try again later.";
        console.log("error occured", error);
    }
}

movieData();