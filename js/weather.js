var cityName = document.getElementById("cityName")
var date = document.getElementById("date")
var icon = document.getElementById("icon")
var tempature = document.getElementById("tempature")
var humidity = document.getElementById("humidity")
var windSpeed = document.getElementById("windSpeed")
var uvIndex = document.getElementById("uvIndex")

$(document).ready(function() {
    var displayDate = moment().format("MM/Do/YYY");

    function setDate() {
        $("displayDay").text(displayDay)
    }
    setDate();

    var searchHistory = [];
    $("#city-button-search").on('click', function() {
        console.log("This is working now!")
        var city = $("#city-search-box").val();
        searchHistory.push(city);
        localStorage.setItem("city-history", JSON.stringify(searchHistory));
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
    }

    function todaysWeatherData(city) {
        fetch("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&APPID=0aa49fb30e2b6fa8a9e119c04fffe18e")
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                console.log("I am hitting this promise")
                tempature.innerHTML = data.main.temp;

                // humidity = data.main.humidity

                // windSpeed = data.wind.speed



                // var todaysWeather = $("#forcast-today")
                //     // forcastToday.textContent = "";

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

//html for F* <span>&#8457;</span>
// UNICODEU+02109
// HEX CODE&#x2109;
// HTML CODE&#8457;
// HTML ENTITY—
// CSS CODE\2109
// // html example
// <span>&#8457;</span>

// // css example
// span {
//   content: "\2109";
// }
//https://www.toptal.com/designers/htmlarrows/symbols/degree-fahrenheit/