var React = require('react');

var WeatherMessage = React.createClass({

    render: function () {
        
        return (

            <div>
                <p> {this.props.message} </p>
            </div>
        )


    }

});







module.exports = WeatherMessage;