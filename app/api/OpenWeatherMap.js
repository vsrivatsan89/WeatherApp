var axios = require('axios');



var OpenWeatherMap = {

getWeather: function(location){


     var appid = '80e53f6c10c1446d6bf053483a057fe1';
    var request = 'http://api.openweathermap.org/data/2.5/weather?q='+location+'&APPID='+appid+'&units=imperial';



    return new Promise(function(resolve, reject){

   
    axios.get(request).then(function(response){
       //console.log(response);
       //alert(JSON.parse(response));
      //alert("Weather:"+response.data.main.temp);
  
      if(response.data.name.toLowerCase() === location.toLowerCase()){
          resolve(response.data.main.temp);

      }else{
          reject("City not found");
      }


    },function(err){
        reject(err);
    });



    });


}



};


module.exports = OpenWeatherMap;