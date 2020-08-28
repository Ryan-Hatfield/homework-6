$(document).ready(function() {
    var m = moment();
    var currentDate = m.format("MMMM Do YYYY");
    const cityInput = document.getElementById("city-input");
    const searchBtn = document.getElementById("search-button");
    const city = document.getElementById("city");
    const weatherIcon = document.getElementById("weatherIcon");
    const temperature = document.getElementById("temperature");
    const humidity = document.getElementById("humidity");4
    const wind = document.getElementById("windSpeed");
    const uvIndex = document.getElementById("uvIndex");
    let searchHistory = JSON.parse(localStorage.getItem("search")) || [];
    console.log(searchHistory);
    function tempConv(K) {
        return Math.floor((K - 273.15) *1.8 +32);
    };
    var APIKey = "166a433c57516f51dfab1f7edaed8413";
    function weather(cityName) {
    // Here we are building the URL we need to query the database
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?" + cityInput + "&appid" + APIKey;
    // Here we run our AJAX call to the OpenWeatherMap API
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      // We store all of the retrieved data inside of an object called "response"
      .then(function(response) {
        // Log the queryURL
        console.log(queryURL);
        // Log the resulting object
        console.log(response);
      });








    }







})