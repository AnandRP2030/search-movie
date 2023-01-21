//movie api key 26ec3831
//http://www.omdbapi.com/?i=tt3896198&apikey=26ec3831

// complete api
//http://www.omdbapi.com/?apikey=26ec3831&t=inception

let movieContainer = document.querySelector(".movie-container");
let movieBox = document.querySelector(".movie-box");
// movieBox.style.display = "none";

let searchBtn = document.getElementById("search-movie");
searchBtn.addEventListener("click", movieSearched);

function movieSearched() {
  let movieName = document.querySelector("#movie-query").value;
//   movieName = "inception";

  let url = "https://www.omdbapi.com/?apikey=26ec3831&t=" + movieName;
  // url = 'oops/'
  fetchMovie(url, display);
}

async function fetchMovie(url, callback) {

  try {

    let res = await fetch (url);
    console.log(res.Response);
    let jsonData = await res.json();

    if (jsonData.Response == 'False'){

      movieContainer.innerHTML = "";
      let content = `<div class="movie-box">
      <img class="gif-img" src="https://media.giphy.com/media/3o6UBpHgaXFDNAuttm/giphy.gif" alt="err-img"> </div>`;
      movieContainer.innerHTML = content;
    }else {
      callback(jsonData);
    }

  } catch (error) {
  }

}


function display(data) {


  let content = `<div class="movie-box">
    <img src="${data.Poster}" alt="Movie-img">
 
    <h2>${data.Title} <span class="year">${data.Year}</span></h2>
    <p class="reco show">Recommended</p>
    <div class="text-layer1">
        <p><span>${data.imdbRating}</span>  Rate</p>
        <p>Release date: <span>  ${data.Released}</span></p>
    </div>

    <div class="layer-2">
        <p>Director: <span>${data.Director}</span></p>
        <p>Genre: <span>${data.Genre}</span></p>
        <p>Language : <span> ${data.Language}</span></p>
        <p>Runtime : <span>${data.Runtime}</span></p>
    
    </div>
    </div>`;

    movieContainer.innerHTML = content;

}



/*
Title: 'Inception', Year: '2010', Rated: 'PG-13', Released: '16 Jul 2010', Runtime: '148 min', …}
Actors
: 
"Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page"
Awards
: 
"Won 4 Oscars. 158 wins & 220 nominations total"
BoxOffice
: 
"$292,587,330"
Country
: 
"United States, United Kingdom"
DVD
: 
"07 Dec 2010"
Director
: 
"Christopher Nolan"
Genre
: 
"Action, Adventure, Sci-Fi"
Language
: 
"English, Japanese, French"
Metascore
: 
"74"
Plot
: 
"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster."
Poster
: 
"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg"
Production
: 
"N/A"
Rated
: 
"PG-13"
Ratings
: 
(3) [{…}, {…}, {…}]
Released
: 
"16 Jul 2010"
Response
: 
"True"
Runtime
: 
"148 min"
Title
: 
"Inception"
Type
: 
"movie"
Website
: 
"N/A"
Writer
: 
"Christopher Nolan"
Year
: 
"2010"
imdbID
: 
"tt1375666"
imdbRating
: 
"8.8"
imdbVotes
: 
"2,349,837"
*/
