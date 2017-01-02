var React = require('react');


var WeatherForm = React.createClass({
    render: function(){

        return (
            <div>
                <form onSubmit={this.fetchWeather}>
                <input type="text" placeholder="City name" ref='cityname'/> 
                <button>Get Weather</button>
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
