// Document ready
//  City Pulls from API
//      Current Day
//          5 Day forcast
//         
//create data dynamic in js??


// Var needed: date, city, temp, icon, humidity, wind speed, uv index, LAT, LON, 

$(document).ready(function() {

    console.log("ready!");
    // search button on click
    // local storage for city
    var searchHistory = [];

    $("#city-button-search").on('click', function() {
        console.log("This is working now!")
        var city = $("#city-search-box").val();
        searchHistory.push(city);
        localStorage.setItem("city-history", JSON.stringify(searchHistory));
        // for (i = 0; i < searchHistory.length; i++) {
        //     listOfCities(searchHistory[i])
        // }
        listOfCities(searchHistory[searchHistory.length - 1]);
        todaysWeatherData(city);
    });

    // if ($("#city-search-box").val() == "") {
    //     alert("Enter a city to search")
    // }
    //prevent default .trim

    //IF NOT A VALID CITY Error Return


    function listOfCities(city) {
        var newCityRow = $("<button>").addClass("new-row").text(city);
        $("#city-list-history").append(newCityRow)
            //Local storage for cities


    }


    function todaysWeatherData(city) {
        fetch("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&APPID=0aa49fb30e2b6fa8a9e119c04fffe18e")
            .then(function(response) {
                console.log(response)
                return response.json();
            })
            .then(function(data) {
                var todaysWeather = $("#forcast-today")
                    // forcastToday.textContent = "";

            });


        // 5 day forcast funtion - array
        // results.forEach(date) => {
        // var isNoon = date["dt_txt"].split(" ") == 12:00:00
        // };





        ///UV Issues
        //var lat = data.coord.lat
        //var long = data.coord.lon

        // http://api.openweathermap.org/data/2.5/uvi?appid=0aa49fb30e2b6fa8a9e119c04fffe18e&lat={lat}&lon={lon}

        // function uvIndex (lat,long)

        // fetch("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=")


        //UV Index funtion
        // 7+   Red
        // 4-6  Orange
        // <4   Green

    };

});