var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({

    
    getDefaultProps:function(){

       return{
        location:'Ennis',
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

    handleSearch:function(location){
        var that = this;
        debugger;
        this.setState({
          isLoading:true,
          errorMessage:undefined,
          location:undefined,
          temp:undefined
        });

        if(typeof location === 'object')
           location = location.location;
        
        //console.log('New Data is:'+data.location);

        openWeatherMap.getTemp(location).then(function(temp){
        
          that.setState({
               location:location,
               temp:temp,
               isLoading:false
          });
          console.log("state after call to weather app:"+that.state.temp);
          console.log("state after call to weather app:"+that.state.location);

          debugger;

        },function(e) {
             debugger;
             //e is what is passed back and has property message so e.message
             that.setState({
               isLoading:false,
               location:undefined,
               temp:undefined,
               errorMessage:e.message
              });
        });

    },
    componentDidMount:function(){

      //router provides quite a number of usefull props one being location which can get the query string
      var location=this.props.location.query.location;
      debugger;
      if(location && location.length > 0){
        this.handleSearch(location);
        window.location.hash = '#/';
      }
   },
   //this function will get called anytime it component props change.
   //it will capture prop changes.
   //React router will change the value of Props when the url changes .
   componentWillReceiveProps:function(newProps){

      debugger;
      var location = newProps.location.query.location;

      if(location && location.length > 0){
        this.handleSearch(location);
        window.location.hash = '#/';
      } 
          
   },
   render:function(){
        //var cityName = this.state.cityName;//get data from form object if not provided get from defaultprops
        //var temp = this.state.temp;
        var {isLoading,temp,location,errorMessage} = this.state; //temp and

        function renderMessage(){
          debugger;
          if(isLoading){

            return <h3 className="text-center">Fetching Weather...</h3>;

          }else if(temp && location){
             return  <WeatherMessage temp={temp} location={location}/>
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

        console.log('In rendering city is '+location);
        console.log('In rendering Temp is'+temp);

        return (

          <div>
           <div>
             <h1 className="text-center page-title">Get Weather</h1>
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
