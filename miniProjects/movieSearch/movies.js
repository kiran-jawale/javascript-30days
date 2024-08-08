const apiKey = 'cff4b7ae';
const base = `https://www.omdbapi.com/?apikey=${apiKey}`;

const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const movieResults = document.getElementById('movie-results');
const errorDiv = document.getElementById('error-div');

searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim().replace(/\s+/g, '+'); // Replace spaces with +
    fetch(`${base}&s=${searchTerm}`)
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(data => {
            displayMovieResults(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            displayErrorMessage('Error fetching movie data. Please try again later.');
        });
});

function displayErrorMessage(message) {
    errorDiv.textContent = message;
}

function displayMovieResults(data) {
    movieResults.innerHTML = ''; // Clear previous results

    if (data.Response === 'True') {
        if (data.Search.length > 0) {
            data.Search.forEach(movie => {
                const movieDiv = document.createElement('div');
                movieDiv.classList.add('movie-card');
                movieDiv.innerHTML = `
                    <h2>${movie.Title} (${movie.Year})</h2>
                    <img style="height:400px; width: 250px" src="${movie.Poster}" alt="${movie.Title} poster">
                    <p>${movie.Type} ${movie.imdbID}</p>
                `;
                movieResults.appendChild(movieDiv);
            });
        } else {
            displayErrorMessage('No movies found for your search.');
        }
    } else {
        displayErrorMessage(data.Error);
    }
}