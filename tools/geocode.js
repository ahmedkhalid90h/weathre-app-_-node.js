const request = require('request')

const geocode = (address,callBack)=>{
    const geocodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiZmFyYWgxMjMiLCJhIjoiY2tpb3ZrNnE4MDB0cjJ0cDlzZXZ5eHQ5dSJ9.F6mgRF14yRJ6WN9JqtpWtw`
    request({url:geocodeUrl,json:true},(error,response)=>{
        if (error) {
            callBack('Unabel to connect location service',undefined)
        } 
        else if (response.body.message) {
            callBack(response.body.message,undefined)
        }
        else if (response.body.features.length == 0) {
            callBack('Invalid Search',undefined)
        }
        else {
            const latitude = response.body.features[0].center[1]
            const longtitude = response.body.features[0].center[0]
            callBack(undefined,{
                latitude,longtitude
            })
            console.log(latitude,longtitude);
        }
    })
}

module.exports = geocode