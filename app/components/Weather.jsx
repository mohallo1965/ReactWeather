var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({

    
    getDefaultProps:function(){

       return{
        cityName:'Ennis',
        temp:'43'
       };
    },
    getInitialState:function(){

        return{
          isLoading:false,
          errorMessage:undefined
          //cityName:this.props.cityName,
          //temp:this.props.temp
        }
    },

    handleSearch:function(data){
        var that = this;

        that.setState({isLoading:true});

        console.log('New Data is:'+data.cityName);

        openWeatherMap.getTemp(data.cityName).then(function(temp){
        
          that.setState({

               cityName:data.cityName,
               temp:temp,
               isLoading:false
          });

        },function(e) {
             debugger;
             //e is what is passed back and has property message so e.message
             that.setState({
               isLoading:false,
               errorMessage:e.message
              });
        });

    },
    render:function(){
        //var cityName = this.state.cityName;//get data from form object if not provided get from defaultprops
        //var temp = this.state.temp;
        var {isLoading,temp,cityName,errorMessage} = this.state; //temp and

        function renderMessage(){
          
          if(isLoading){

            return <h3 className="text-center">Fetching Weather...</h3>;

          }else if(temp && cityName){
             return  <WeatherMessage temp={temp} cityName={cityName}/>
          }
        }


        function renderError(){
             debugger;
             //previously defined as undefined in getInitialState
             if (typeof errorMessage === 'string'){
                return (
                  <ErrorModal message={errorMessage}/>
                )

             }
        }

        console.log('In rendering city is '+cityName);
        console.log('In rendering Temp is'+temp);

        return (

          <div>
           <div>
             <h1 className="text-center">Get Weather</h1>
           </div>
           <div>
             <WeatherForm onSearch={this.handleSearch} />

             {renderMessage()}
             {renderError()}
             
           </div>
          </div>
        );
    }

});

module.exports = Weather;
