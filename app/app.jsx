var React = require('react');
var ReactDOM = require('react-dom');

//Object destructuring
//var {Route, Router ,IndexRoute ,hashHistory} = require(react-router');

//The same as above line .Created four new React variables from the react router library .
var Route = require('react-router').Route;
var Router = require('react-router').Router;
var IndexRoute = require('react-router').IndexRoute;
var hashHistory = require('react-router').hashHistory;

var Main =require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');




var firstName = "Mairtin";
var message = "Hello from Martin O'Halloran";


//Load foundation with loaders style and css.
require('style!css!foundation-sites/dist/foundation.min.css');
//fire up foundation
$(document).foundation();

//load our own syles with the defined loaders style and css with alias applicationStyles referenced in webpack.config.js
require('style!css!applicationStyles');


ReactDOM.render(
         <Router history={hashHistory}>
            <Route path="/" component={Main}>
                <Route path="about" component={About} />
                <Route path="examples" component={Examples} />
                <IndexRoute component={Weather}/>
            </Route>
         </Router>,
         document.getElementById('app')
);
