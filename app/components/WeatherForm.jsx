var React = require('react');


var WeatherForm = React.createClass({

     onFormSubmit:function(e){

         e.preventDefault();

         var cityName = this.refs.cityName.value;

         var formData= {};

         if(cityName.length > 0){
              formData.cityName = cityName;
              this.refs.cityName.value = '';
              
         }
         this.props.onSearch(formData);

     },
     render: function(){

         return(

             <div>
               <form onSubmit={this.onFormSubmit}>

                  <input type='text' ref='cityName' placeholder="Enter City Name" />
                  <button className="button expanded hollow" >Get Weather</button>
               </form>
             </div>

         );
     }

});

module.exports=WeatherForm;