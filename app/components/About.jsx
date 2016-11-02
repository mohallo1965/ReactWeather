var React = require('react');

//var About = React.createClass({

//    render:function(){

//        return (

//           <h3>About Components</h3>
//        );
//    }

//});



//stateless functional component.Replaced the React.createClass .
var About = (props) =>{
   return (

           <h3>About</h3>
           <p>Welcome to About Page</p>
        );
}

module.exports = About;