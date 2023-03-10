let movieData = {
  "The Darjeeling Limited": {
    plot: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
    cast: ["Jason Schwartzman", "Owen Wilson", "Adrien Brody"],
    runtime: 151,
    rating: 7.2,
    year: 2007,
  },
  "The Royal Tenenbaums": {
    plot: "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons",
    rating: 7.6,
    year: 2001,
    cast: ["Gene Hackman", "Gwnyeth Paltrow", "Anjelica Huston"],
    runtime: 170,
  },
  "Fantastic Mr. Fox": {
    year: 2009,
    plot: "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.",
    cast: [
      "George Clooney",
      "Meryl Streep",
      "Bill Murray",
      "Jason Schwartzman",
    ],
    runtime: 147,
    rating: 7.9,
  },
  "The Grand Budapest Hotel": {
    rating: 8.1,
    runtime: 159,
    year: 2014,
    plot: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
    cast: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"],
  },
};

let curMovie = movieData["The Darjeeling Limited"]; // curMovie <-> {"The Darjeeling Limited": { ... }}

// const searchButton = document.querySelector("#search").value.toLowerCase();
// searchButton.addEventListener("input", function () {

// }

// }
//

// function renderMovies(moviesArray) {
//   let rootDiv = document.getElementById("result");
// }

// renderMovies(movieData);
// let movies = Object.keys(movieData);
// console.log(movieData["The Grand Budapest Hotel"].rating);
// console.log(movies);
// console.log(movies[2]);

// let name = document.querySelector(movieData)`movie ${movie}`;
// let result =

function renderMovieGallery(movieArray) {
  // for aMovie of movieArray
  //    renderMovieCard(aMovie)
}

function renderMovieCard(movie) {
  const content = document.querySelector("#content");

  let plot = movie.plot;
  let cast = movie.cast;
  let year = movie.year;
  let runtime = movie.runtime;
  let rating = movie.rating;

  const movieCard = document.createElement("div");

  const plotDescription = document.createElement("p");
  plotDescription.innerHTML = plot;
  const castDescription = document.createElement("p");
  castDescription.innerHTML = cast;
  const yearDescription = document.createElement("p");
  yearDescription.innerHTML = year;
  const runtimeDescription = document.createElement("p");
  runtimeDescription.innerHTML = runtime;
  const ratingDescription = document.createElement("p");
  ratingDescription.innerHTML = rating;
  //
  content.append(movieCard);
  movieCard.append(plotDescription);
  movieCard.append(castDescription);
  movieCard.append(yearDescription);
  movieCard.append(runtimeDescription);
  movieCard.append(ratingDescription);
}

function renderMovieData() {
  for (const movieTitle in movieData) {
    let curMovie = movieData[movieTitle];
    renderMovieCard(curMovie);
  }
}

// renderMovieGallery(movieData);
// renderMovieCard(movieData["The Darjeeling Limited"]);
// renderMovieCard(movieData["The Royal Tenenbaums"]);
// renderMovieCard(movieData["Fantastic Mr. Fox"]);
// renderMovieCard(movieData["The Grand Budapest Hotel"]);

renderMovieData();

let button = document.querySelector("#submitMovie");
button.addEventListener("click", function () {
  movieData[movieTitle] = movie;
});

//movieData["Harry potter"] = harryPotterMovie;
// movieData.push("Harry potter", harryPotterMovie)

// let hpRatingInputElement = document.querySelector("#rating");
// hpRatingValue = hpRatingInputElement.value;

// let hpPlotInputElement = document.querySelector("#plot");
// hpPlotValue = hpPlotInputElement.value;

// let harryPotterMovie = {
//   rating: hpRatingValue,
//   plot: hpPlotValue,
// };

// movieData["Harry Potter"] = harryPotterMovie;

renderMovieData();

const btn = document.querySelector("#addNewMovie");

btn.addEventListener("click", function () {
  let formPopUp = document.querySelector(".addNewMovie").classList.add("show");
});
