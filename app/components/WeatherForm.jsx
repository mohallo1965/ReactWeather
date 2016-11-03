var React = require('react');


var WeatherForm = React.createClass({

     onFormSubmit:function(e){

         e.preventDefault();

         var location = this.refs.location.value;

         var formData= {};

         if(location.length > 0){
              formData.location = location;
              this.refs.location.value = '';
              
         }
         this.props.onSearch(formData);

     },
     render: function(){

         return(

             <div>
               <form onSubmit={this.onFormSubmit}>

                  <input type='search' ref='location' placeholder="Search Weather by City" />
                  <button className="button expanded hollow" >Get Weather</button>
               </form>
             </div>

         );
     }

});

module.exports=WeatherForm;