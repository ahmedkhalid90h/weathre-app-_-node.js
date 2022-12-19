const { error } = require('console')
const request = require('request')

const url = 'http://api.weatherapi.com/v1/current.json?key=a350cbce366e4ebeba3110010221812&q=30.05,31.25'
// request({url,json:true},(error,response)=>{
//     if (error) {
//         console.log('error has occurred')
//     }
//     else if(response.body.error){
//         console.log(response.body.error.message)
//     }
//     else{
//         console.log('In ' + response.body.location.name + ' temp is ' + response.body.current.temp_c + ' and it is ' + response.body.current.condition.text)
//     }
// })

const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/cairo.json?access_token=pk.eyJ1IjoiZmFyYWgxMjMiLCJhIjoiY2tpb3ZrNnE4MDB0cjJ0cDlzZXZ5eHQ5dSJ9.F6mgRF14yRJ6WN9JqtpWtw'

// request({url:geocodeUrl,json:true},(error,response)=>{
//     if (error) {
//         console.log('Error has occurred');
//     }
//     else if(response.body.message){
//         console.log(response.body.message)
//     }
//     else if(response.body.features.length == 0){
//         console.log('Invalid Search');
//     }
//     else{
//         const longtitude = response.body.features[0].center[1]
//         const latitude = response.body.features[0].center[0]
//         console.log(latitude,longtitude)
//     }
// })

////////////////////////////////////////////////////////////////////


// const forcast = (latitude,longtitude,callBack)=>{
//     const url = 'http://api.weatherapi.com/v1/current.json?key=a350cbce366e4ebeba3110010221812&q=' + latitude + ',' + longtitude
//     request({url,json:true},(error,response)=>{
//         if (error) {
//             callBack('Error has ocuured',undefined)
//             // console.log('Error has ocuured')
//         } 
//         else if (response.body.error) {
//             callBack(response.body.error.message,undefined)
//             // console.log(response.body.error.message)
//         } 
//         else {
//             callBack(undefined,'In ' + response.body.location.name + ' temp is ' + response.body.current.temp_c + ' and it is ' + response.body.current.condition.text)
//             // console.log('In ' + response.body.location.name + ' temp is ' + response.body.current.temp_c + ' and it is ' + response.body.current.condition.text)
//         }
//     })
// }



///////////////////////////////////

// const geocode = (address,callBack)=>{
//     const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address +'.json?access_token=pk.eyJ1IjoiZmFyYWgxMjMiLCJhIjoiY2tpb3ZrNnE4MDB0cjJ0cDlzZXZ5eHQ5dSJ9.F6mgRF14yRJ6WN9JqtpWtw'
//     request({url:geocodeUrl,json:true},(error,response)=>{
//         if (error) {
//             callBack('Unabel to connect location service',undefined)
//         } 
//         else if (response.body.message) {
//             callBack(response.body.message,undefined)
//         }
//         else if (response.body.features.length == 0) {
//             callBack('Invalid Search',undefined)
//         }
//         else {
//             callBack(undefined,{
//                 latitude:response.body.features[0].center[0],
//                 longtitude:response.body.features[0].center[1]
//             })
//         }
//     })
// }

const forcast = require('../tools/forecast')
const geocode = require('../tools/geocode')

// forcast(30.05,31.25,(errCallBack,dataCallBack)=>{
//     console.log(errCallBack)
//     console.log(dataCallBack)
// })

const process = require('process');


geocode(process.argv[2],(error,data)=>{
    if (error) {
        return console.log(error)
    }
    console.log(data)
    forcast(data.latitude,data.longtitude,(errCallBack,dataCallBack)=>{
        if (errCallBack) {
            return console.log(errCallBack)
        }
        console.log(dataCallBack)
    })
})

