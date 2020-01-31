
var city = $('#cityInput').val().trim()
var APIKey = "ea76a83956dac986996dbfe09265f297";

function searchCities(city) {
  

    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=ea76a83956dac986996dbfe09265f297";
    iconDiv = $(".icon");
    // Our AJAX call to the OpenWeatherMap API
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
        
        // Transfer content to HTML
        $(".city").html("<h1>" + response.name + " Weather Details</h1>");
        var getIcon = "http://openweathermap.org/img/wn/" + response.weather[0].icon + ".png";
        var cityIcon = $(".icon").html('<img src="' + getIcon + '"/>');
        iconDiv.append(cityIcon);
        $(".wind").text("Wind Speed: " + response.wind.speed);
        $(".humidity").text("Humidity: " + response.main.humidity);
        $(".temp").text("Temperature (F) " + response.main.temp);

        // Converts the temp to Kelvin with the below formula
        var tempF = (response.main.temp - 273.15) * 1.80 + 32;
        $(".tempF").text("Temperature (Kelvin) " + tempF);
       
        
        console.log("Wind Speed: " + response.wind.speed);
        console.log("Humidity: " + response.main.humidity);
        console.log("Temperature (F): " + response.main.temp);
      
      });
    }

    function forecast(city) {
  

      var queryURL2 = "https://api.openweathermap.org/data/2.5/forecast?q=" + city;
     
      $.ajax({
        url: queryURL2,
        method: "GET"
      })
       
        .then(function(response) {
          console.log(response);
          $(".forecast").html("<h2>" + response.name + " Weather Details</h2>");
        });
      }



    $(".button").on("click", function(event) {
        // Preventing the button from trying to submit the form
         event.preventDefault();
        // Storing the city name
        var cityInput = $("#cityInput").val().trim();
      // Running the searchCitiesInTown function (passing in the city as an argument)
      searchCities(cityInput);
    
    });