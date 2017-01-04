var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('OpenWeatherMap');

var Weather = React.createClass({
  render: function () {
    return (
      //80e53f6c10c1446d6bf053483a057fe1 - api key
      

      <div>
      <WeatherForm onSearch={this.handleSearch}/>
      <WeatherMessage message={this.state.message}/>
      
      </div>
      
    )
  },
  handleSearch: function(city){

  //This function will go fetch the weather and upate the weather message form etc. 
 var temperature = '';
 var message = '';
 var that = this;

  OpenWeatherMap.getWeather(city).then(function(temp){

   that.setState({message: 'The weather in ' + city + ' is '+temp});

  },function(error){
    
  that.setState({message: 'City is not found'});
 
  });

 

  },
getInitialState: function(){
  return {
    message: ''

  };
  } 
});

module.exports = Weather;
