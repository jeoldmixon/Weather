// Document ready
//  City Pulls from API
//      Current Day
//          5 Day forcast
//              

$(document).ready(function() {
    // search button on click
    // local storage for city

    $("#city-button-search").on('click', () => {

        if ($("#city-search-box").val() == "") {
            alert("Enter a city to search")
        }
    });
    var citySearch = $("#city-search-box").val();
    addCityToSearch(citySearch);
    todaysWeatherData(citySearch);

});

function listOfCities(citySearch) {
    var newCityRow = $("<button>").addClass("new-row").text(citySearch);

}

function todaysWeatherData(citySearch) {
    fetch("http://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&APPID=0aa49fb30e2b6fa8a9e119c04fffe18e")
    console.log(citySearch)
    console.log(response)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            var todaysWeather = $("#forcast-today")
            forcastToday.textContent = "";

        });





    //UV Index funtion
    // 7+   Red
    // 4-6  Orange
    // <4   Green

};