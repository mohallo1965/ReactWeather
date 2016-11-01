var React = require('react');

//var WeatherMessage = React.createClass({

//    render:function(){

//        return(

//            <h3>{this.props.cityName} Temperature is {this.props.temp} </h3>

//        );
//    }

//});


//add destructering as parametres same as 'var { cityName, temp} = props;''
var WeatherMessage = ( { cityName,temp }) =>{

    //Es6 Destructering .done in the signature 
    //var { cityName, temp} = props;

    return(
           
            <h3>{cityName} Temperature is {temp} </h3>

        );
}

module.exports = WeatherMessage;