const addMovieBtn = document.getElementById("add-movie-btn");
const searchMovieBtn = document.getElementById("search-btn");

let movies = [];

const renderMoviesList = (filteredText = "") => {
  const moviesListElement = document.getElementById("movie-list");
  if (movies.length === 0) {
    moviesListElement.classList.remove("visible");
    return;
  } else {
    moviesListElement.classList.add("visible");
  }

  moviesListElement.innerHTML = "";

  const filteredMoviesList = filteredText
    ? movies.filter((movie) => movie.info.title.includes(filteredText))
    : movies;

  filteredMoviesList.forEach((movie) => {
    const movieElement = document.createElement("li");
    // let text = movie.info.title + " - ";
    // for (const key in movie.info) {
    //   if (key !== "title") {
    //     text += `${key}: ${movie.info[key]}`;
    //   }
    // }
    let { info } = movie;
    let { getFormattedTitle } = movie;
    // getFormattedTitle = getFormattedTitle.bind(movie);
    let text = getFormattedTitle.call(movie) + " - ";
    for (const key in info) {
      if (key !== "title" && key !== "_title") {
        text += `${key}: ${info[key]}`;
      }
    }
    movieElement.textContent = text;
    moviesListElement.append(movieElement);
  });
};

const addMovieHandler = () => {
  const title = document.getElementById("title").value;
  const extraName = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-value").value;

  if (extraName.trim() === "" || extraValue.trim() === "") {
    return;
  }

  const newMovie = {
    info: {
      set title(val) {
        if (val.trim() === "") {
          this._title = "DEFAULT";
          return;
        }
        this._title = val;
      },
      get title() {
        return this._title;
      },
      [extraName]: extraValue,
    },
    id: Math.random(),
    getFormattedTitle() {
      return this.info.title.toUpperCase();
    },
  };

  newMovie.info.title = title;
  console.log(newMovie.info.title);

  movies.push(newMovie);
  renderMoviesList();
};

const searchMovieHandler = () => {
  const filteredText = document.getElementById("filter-title").value;
  renderMoviesList(filteredText);
};

addMovieBtn.addEventListener("click", addMovieHandler);
searchMovieBtn.addEventListener("click", searchMovieHandler);
