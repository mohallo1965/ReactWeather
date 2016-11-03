var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');


var ErrorModel = React.createClass({

     getDefaultProps:function(){
         
         return {

           title:'Error'
         }

     },
     propTypes:{
          title:React.PropTypes.string,
          message:React.PropTypes.string.isRequired
     },
     componentDidMount:function(){
        var {title,message} = this.props;

        var modalMarkup = (
            <div id="error-modal" className="reveal tiny text-center" data-reveal="">

               <h4>{title}</h4>
               <p>{message}</p>

               <p>
                <button className="button hollow" data-close="">
                  Okay
                </button>
               </p>

            </div>
        );      

        //Add markup to the DOM
        var $modal = $(ReactDOMServer.renderToString(modalMarkup));
        $(ReactDOM.findDOMNode(this)).html($modal);

        //create instance of our modal by calling Foundation.Reveal 
        //and pass it the component id we want to create
        var model = new Foundation.Reveal($('#error-modal'));
        model.open();
     },
     render:function(){

        //To fix the issue of when we put in a bad loacation and then put in a good location it does not work and
        // does not return anything.The bottom line is that foundation does not work well with React.
        //After React puts the elements in the DOM ,Foundation is removing them .Bottom line these components do not
        //play well together in this case .

        //just creating an empty DOM .Moved all the code to the CompontDidMount function and created the Elements in that
        //function .
        return (
           <div>
           </div>

        );

       
     },

     renderOld:function(){

        var {title,message} = this.props;

        

        return (
            <div id="error-modal" className="reveal tiny text-center" data-reveal="">

               <h4>{title}</h4>
               <p>{message}</p>

               <p>
                <button className="button hollow" data-close="">
                  Okay
                </button>
               </p>

            </div>
        );      
     }

});

module.exports = ErrorModel;