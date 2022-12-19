const request = require('request')

const forcast = (latitude,longtitude,callBack)=>{
    const url = 'https://api.weatherapi.com/v1/current.json?key=a350cbce366e4ebeba3110010221812&q='+latitude+','+longtitude
    request({url,json:true},(error,response)=>{
        if (error) {
            callBack('Error has ocuured')
            // console.log('Error has ocuured')
        } 
        else if (response.body.error) {
            callBack(response.body.error.message,undefined)
            // console.log(response.body.error.message)
        } 
        else {
            callBack(undefined,'In ' + response.body.location.country + ' temp is ' + response.body.current.temp_c + ' and it is ' + response.body.current.condition.text)
            // console.log('In ' + response.body.location.name + ' temp is ' + response.body.current.temp_c + ' and it is ' + response.body.current.condition.text)
        }
    })
}

module.exports = forcast