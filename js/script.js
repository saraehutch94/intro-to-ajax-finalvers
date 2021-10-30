$(function(){

// Constants and Variables
const BASE_URL = 'http://www.omdbapi.com/';
const API_KEY = '5ceecba4';
let movieData; // undefined

// Cached Element References
const $title = $('#title'); // selecting the element for the movie title
const $year = $('#year');
const $rated = $('#rated');
const $form = $('form'); // step 1 is always select the dom element first
const $input = $('input[type="text"]');

// step attach an event listener

// Event Listeners
// event handler functions are passed an object containing data representing the event
$form.on('submit', handleGetData)


// Functions

function handleGetData(event) {
    // Set up a request to our api using Javascript
    event.preventDefault(); 
    // this method is used to turn off the default page refresh behavior
    const movieTitle = $input.val();
    $input.val("");
    // $.ajax() returns a Promise object that is used to resolve the request
    // We call .then to register our success callback and our failure callback
    // one of the functions will be called based on the failure or success of our request
    // if successful the success callback will receive an object representing the resulting data
    $.ajax(`${BASE_URL}?apikey=${API_KEY}&t=${movieTitle}`).then(function (data) {
        // the success callback
        // instead visualizing our data in the console here
        // we will add the data as text to the three elements
        movieData = data; // data comes from our success callback once the data comes 
        render();
        // $('main').append(`<img src="${data.Poster}" />`);
    }, function (error) {
        // the failure callback
        console.log(error);
    });
}


function render() {
    $title.text(movieData.Title);
    $year.text(movieData.Year);
    $rated.text(movieData.Rated);
}

    
});
