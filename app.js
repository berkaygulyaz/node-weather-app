// const request = require('request');

const request = require("request");

// const url = 'https://api.openweathermap.org/data/2.5/weather?lat=39,7505&lon=37,0150&appid=46470136edd4f53667ef9efa0cd415da&units=metric';

// request({ url: url, json: true}, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service')  
//     } else {
//         console.log('It is currently ' + response.body.main.temp)  
//     }
// })

// const geoCodeUrl = `http://api.positionstack.com/v1/forward?access_key=707ca46f0ef5d1902a748664eb390cef&query=1600%20Pennsylvania%20Ave%20NW,%20Washington%20DC`

// request({ url: geoCodeUrl, json: true}, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to location service')  
//     } else {
//         const latitude = response.body.data[0].latitude;
//         const longitude = response.body.data[1].longitude;
    
//         console.log(latitude, longitude)
//     }
// })

const geocode = (address, callback) => {
    const url = 'http://api.positionstack.com/v1/forward?access_key=707ca46f0ef5d1902a748664eb390cef&query=1600%20' + encodeURIComponent(address) + '%20Ave%20NW,%20Washington%20DC';

    request({ url: url, json: true }, (error, response) => {
        if(error) {
            callback('Unable to connect to location services', undefined)
        } else if (response.data === []) {
            callback('Unable to find location. Try another search', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.data.latitude,
                longtitude: response.body.data.longtitude,
                location: response.body.data.locality,
            })
        }
        console.log(response.body)
    })
}

geocode('Boston', (error, data) => {
    console.log('Error', error);
    console.log('Data', data)
})