var React = require('react');


var WeatherForm = React.createClass({
    render: function(){

        return (
          
            <div className="callout primary">
                <form onSubmit={this.fetchWeather} >
                <input type="text" placeholder="City name" ref='cityname'/> 
                 <input type="submit" className="button expanded" value="Get Weather"/>
                </form>
            </div>
          
        )

    },
    fetchWeather: function(e){
        e.preventDefault();

        var cityName = this.refs.cityname.value;
        this.refs.cityname.value = '';

        this.props.onSearch(cityName);

            
    }


});

module.exports = WeatherForm;
