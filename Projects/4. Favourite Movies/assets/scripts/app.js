const startAddingMovieButton = document.getElementById("add-modal");
const addMovieButton = document.querySelector("header button");
const movieBackground = document.getElementById("backdrop");
const cancelAddMovieButton =
  startAddingMovieButton.querySelector(".btn--passive");
const userInputs = document.querySelectorAll("input");
const addMovieToListButton =
  startAddingMovieButton.querySelector(".btn--success");
const movieListSection = document.getElementById("entry-text");
const confirmDeleteElement = document.getElementById("delete-modal");
const cancelDeleteButton = confirmDeleteElement.querySelector(".btn--passive");
let confirmDeleteButton = confirmDeleteElement.querySelector(".btn--danger");

let movies = [];

const showingAddingMoviePage = () => {
  startAddingMovieButton.classList.add("visible");
};

const hidingAddingMoviePage = () => {
  startAddingMovieButton.classList.remove("visible");
};

const toggleMovieBackground = () => {
  movieBackground.classList.toggle("visible");
};

const showingAddingMoviePageHandler = () => {
  showingAddingMoviePage();
  toggleMovieBackground();
};

const showingDeleteElement = () => {
  confirmDeleteElement.classList.add("visible");
};

const hidingDeleteElement = () => {
  confirmDeleteElement.classList.remove("visible");
};

const hidingAddingMoviePageHandler = () => {
  hidingAddingMoviePage();
  toggleMovieBackground();
  hidingDeleteElement();
};

const resetUserInputs = () => {
  for (const userInput of userInputs) {
    userInput.value = "";
  }
};

const cancellingMovieModalHandler = () => {
  hidingAddingMoviePageHandler();
  resetUserInputs();
};

const updateUI = () => {
  if (movies.length === 0) {
    movieListSection.style.display = "block";
  } else {
    movieListSection.style.display = "none";
  }
};

const cancelDeleteButtonHandler = () => {
  toggleMovieBackground();
  hidingDeleteElement();
};

const confirmDeleteMovie = (id) => {
  let movieIndex = 0;
  for (const movie of movies) {
    if (movie.id === id) {
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 1);
  const movieList = document.getElementById("movie-list");
  // movieList.children[movieIndex].remove();
  movieList.removeChild(movieList.children[movieIndex]);
  cancelDeleteButtonHandler();
  updateUI();
};

const deleteMovieHandler = (id) => {
  showingDeleteElement();
  toggleMovieBackground();
  confirmDeleteButton.replaceWith(confirmDeleteButton.cloneNode(true));
  confirmDeleteButton = confirmDeleteElement.querySelector(".btn--danger");
  cancelDeleteButton.removeEventListener("click", cancelDeleteButtonHandler);
  cancelDeleteButton.addEventListener("click", cancelDeleteButtonHandler);
  confirmDeleteButton.addEventListener(
    "click",
    confirmDeleteMovie.bind(null, id)
  );
};

const renderingMovieListElement = (id, title, imageURL, rating) => {
  const movieList = document.getElementById("movie-list");
  const movieListElement = document.createElement("li");
  movieListElement.className = "movie-element";

  movieListElement.innerHTML = `
  <div class='movie-element__image'>
    <img src='${imageURL}' alt='${title}'>
  </div>
  <div class="movie-element__info">
    <h2>${title}</h2>
    <p>${rating}/5</p>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
      <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
    </svg>
  </div>
  `;

  movieList.appendChild(movieListElement);

  movieListElement.addEventListener("click", deleteMovieHandler.bind(null, id));
};

const addMoviehandler = () => {
  const movie = {
    id: Math.random().toString(),
    title: userInputs[0].value,
    imageURL: userInputs[1].value,
    rating: userInputs[2].value,
  };

  if (
    movie.title === "" ||
    movie.imageURL === "" ||
    movie.rating === "" ||
    +movie.rating < 1 ||
    +movie.rating > 5
  ) {
    alert("Please input the valid data.");
    return;
  }

  movies.push(movie);
  hidingAddingMoviePageHandler();
  resetUserInputs();
  updateUI();

  renderingMovieListElement(
    movie.id,
    movie.title,
    movie.imageURL,
    movie.rating
  );
};

addMovieButton.addEventListener("click", showingAddingMoviePageHandler);
movieBackground.addEventListener("click", hidingAddingMoviePageHandler);
cancelAddMovieButton.addEventListener("click", cancellingMovieModalHandler);
addMovieToListButton.addEventListener("click", addMoviehandler);
