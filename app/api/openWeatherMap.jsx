var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&appid=115e1d44ef0526d76360f3d811c2a0ef';
module.exports= {

    getTemp:function(location){
       var encodedLocation = encodeURIComponent(location);

       //the ` allows us to inject variables into the string .
       var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

       return axios.get(requestUrl).then(function(res){

           if(res.data.cod && res.data.message){
               throw new Error(res.data.message);
           }else{
               return res.data.main.temp;
           }
           

       }, function(res){
          
          debugger;
          console.log("Error in communicating with Host");
 
          throw new Error(res.data.message);

       });
   }
}