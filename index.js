$('#zipcode')
.click(function(){
    var zipcodeValue = $('#weather').val()
    var url = getApiUrl(zipcodeValue);
    getWeatherData(url);
})

function getWeatherData(url){
    $.get(url, function(data){
        console.log(data);
        $('#access').text(JSON.stringify(data.weather[0].description));
    })
}

function getApiUrl(newZip){
    return `https://api.openweathermap.org/data/2.5/weather?zip=${newZip}&APPID=af23f0fb6b37a45e1733df432b7737e6`;
}