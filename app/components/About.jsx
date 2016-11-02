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

          <div>
           <h1 className="text-center page-title">About</h1>
           <p>This is a Weather application built on the Web Framework React</p>

           <p>Here are some of the tools I used:</p>
           <p>
             <ul>
              <li>
                 <a href="https://facebook.github.io/react">React</a> - This was the 
                    JavaScript Framework used.
              </li>

              <li>
                  <a href="http://openweathermap.org">Open Weather Map</a> - I used Open Weather Map to search for data by city Name.
              </li>

             </ul>
           
           </p>
          </div>
        );
}

module.exports = About;