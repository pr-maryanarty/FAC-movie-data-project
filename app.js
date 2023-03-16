let movieData = {
  "The Darjeeling Limited": {
    plot: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
    cast: ["Jason Schwartzman", " Owen Wilson", " Adrien Brody"],
    runtime: 151,
    rating: 7.2,
    year: 2007,
  },
  "The Royal Tenenbaums": {
    plot: "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons",
    rating: 7.6,
    year: 2001,
    cast: ["Gene Hackman ", " Gwnyeth Paltrow", " Anjelica Huston"],
    runtime: 170,
  },
  "Fantastic Mr. Fox": {
    year: 2009,
    plot: "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.",
    cast: [
      "George Clooney",
      " Meryl Streep",
      " Bill Murray",
      " Jason Schwartzman",
    ],
    runtime: 147,
    rating: 7.9,
  },
  "The Grand Budapest Hotel": {
    rating: 8.1,
    runtime: 159,
    year: 2014,
    plot: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
    cast: ["Ralph Fiennes", " F. Murray Abraham", " Mathieu Amalric"],
  },
};

// let moviesArray = [
//   {
//    title: "The Darjeeling Limited";
//     plot: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
//     cast: ["Jason Schwartzman", "Owen Wilson", "Adrien Brody"],
//     runtime: 151,
//     rating: 7.2,
//     year: 2007,
//   },
//   {
//    title: "The Royal Tenenbaums";
//     plot: "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons",
//     rating: 7.6,
//     year: 2001,
//     cast: ["Gene Hackman", "Gwnyeth Paltrow", "Anjelica Huston"],
//     runtime: 170,
//   },
// ];

const content = document.querySelector("#content");
// const searchButton = document.querySelector("#search").value.toLowerCase();
// searchButton.addEventListener("input", function () {

function mapToArray(movieData) {
  let arrayForMovies = [];
  for (const movieTitle in movieData) {
    let curMovie = movieData[movieTitle];
    let movieInfo = {
      title: movieTitle,
      rating: curMovie.rating,
      year: curMovie.year,
      runtime: curMovie.runtime,
      plot: curMovie.plot,
      cast: curMovie.cast,
    };
    arrayForMovies.push(movieInfo);
  }
  return arrayForMovies;
}

let moviesArray = mapToArray(movieData);

function renderMovieCard(movie) {
  let title = movie.title;
  let plot = movie.plot;
  let cast = movie.cast;
  let year = movie.year;
  let runtime = movie.runtime;
  let rating = movie.rating;

  const movieCard = document.createElement("div");
  const titleElement = document.createElement("h1");
  titleElement.innerHTML = title;
  const plotElement = document.createElement("p");
  plotElement.innerHTML = plot;
  const ratingElement = document.createElement("p");
  ratingElement.innerHTML = "⭐️ " + rating;
  const yearElement = document.createElement("p");
  yearElement.innerHTML = "released in " + year;
  const runtimeElement = document.createElement("p");
  runtimeElement.innerHTML = runtime + " mins";
  const castElement = document.createElement("p");
  castElement.innerHTML = "cast: " + cast;

  content.append(movieCard);
  movieCard.append(titleElement);
  movieCard.append(plotElement);
  movieCard.append(ratingElement);
  movieCard.append(yearElement);
  movieCard.append(runtimeElement);
  movieCard.append(castElement);
  movieCard.classList.add("movieCard");
  titleElement.classList.add("elementOfMovieTitle");
  plotElement.classList.add("elementOfMoviePlot");
  castElement.classList.add("elementOfMovieCast");
  yearElement.classList.add("elementOfMovieYear");
  runtimeElement.classList.add("elementOfMovieRuntime");
  ratingElement.classList.add("elementOfMovieRating");
}

// render configs :
//   sort by
//   filter by title
//   filter by rating

// find selector
// on selection -> sort
let dropDownSort = document.querySelector("#movieSort");
let curSeletedSortValue = "unselected";
dropDownSort.addEventListener("change", function (selectedElement) {
  curSeletedSortValue = selectedElement.target.value;
  renderMoviesArray();
});

function renderMoviesArray() {
  content.innerHTML = "";

  if (curSeletedSortValue === "rating") {
    moviesArray.sort(function (movie1, movie2) {
      return movie1.rating - movie2.rating;
    });
  } else if (curSeletedSortValue === "year") {
    moviesArray.sort(function (movie1, movie2) {
      return movie1.year - movie2.year;
    });
  } else if (curSeletedSortValue === "runtime") {
    moviesArray.sort(function (movie1, movie2) {
      return movie1.runtime - movie2.runtime;
    });
  }

  for (const movie of moviesArray) {
    renderMovieCard(movie);
  }
}

renderMoviesArray();

let submitNewMovie = document.querySelector(".submitMovie");
submitNewMovie.addEventListener("click", function () {
  let newMovie = {
    title: document.getElementById("movieTitle").value,
    rating: document.getElementById("rating").value,
    runtime: document.getElementById("runtime").value,
    year: document.getElementById("year").value,
    plot: document.getElementById("plot").value,
    cast: document.getElementById("cast").value,
  };
  if (
    document.getElementById("movieTitle").value.trim() !== "" &&
    document.getElementById("plot").value.trim() !== "" &&
    document.getElementById("cast").value.trim() !== "" &&
    document.getElementById("runtime").value.trim() !== "" &&
    document.getElementById("year").value.trim() !== "" &&
    document.getElementById("rating").value.trim() !== ""
  ) {
    moviesArray.push(newMovie);
    renderMoviesArray();
    //close the form
    document.querySelector(".addNewMovie").classList.remove("show");
  } else {
    alert("Please fill in all the fields!");
  }
});

const formAddMovie = document.querySelector("#addNewMovie");
formAddMovie.addEventListener("click", function () {
  document.querySelector(".addNewMovie").classList.add("show");
});
