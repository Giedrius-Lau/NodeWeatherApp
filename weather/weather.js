const request = require('request');

var getWeather = (lat, long, callback) => {
  request({
    url: `https://api.darksky.net/forecast/052e6d70c203846bb952f6d81f70772c/${lat},${long}`,
    json: true
    }, (error, response, body) => {
      if (!error && response.statusCode === 200){
        callback(undefined, {
          temperature: body.currently.temperature,
          location: body.timezone,
          apparentTemperature: body.currently.apparentTemperature,
          windSpeed: body.currently.windSpeed
        });
      } else {
        callback('Unable to fetch weather.');
      }
  });
}

module.exports.getWeather = getWeather;
