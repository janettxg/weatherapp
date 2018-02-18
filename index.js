$('#zipcode')
.click(function(){
    var zipcodeValue = $('#weather').val()
    var url = getApiUrl(zipcodeValue);
    getWeatherData(url);
})

function getWeatherData(url){
    $.get(url, function(data){
        console.log(data);
        $('#temperature').text(JSON.stringify(data.main.temp));
        $('#weather-description').text(JSON.stringify(data.weather[0].description));
    })
}

function getApiUrl(newZip){
    return `https://api.openweathermap.org/data/2.5/weather?zip=${newZip}&units=imperial&APPID=af23f0fb6b37a45e1733df432b7737e6`;
}

var skycons = new Skycons({"color": "pink"});
// on Android, a nasty hack is needed: {"resizeClear": true}

// you can add a canvas by it's ID...
skycons.add("icon");

// if you're using the Forecast API, you can also supply
// strings: "partly-cloudy-day" or "rain".

// start animation!
skycons.play();

// you can also halt animation with skycons.pause()

// want to change the icon? no problem:
skycons.set("icon", Skycons.PARTLY_CLOUDY_NIGHT);
