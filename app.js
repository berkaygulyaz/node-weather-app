const request = require('request');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=39,7505&lon=37,0150&appid=46470136edd4f53667ef9efa0cd415da&units=metric';

request({ url: url, json: true}, (error, response) => {
    console.log(response)
    console.log('It is currently ' + response.body.main.temp)
})