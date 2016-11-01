var names = ['Martin','jim','Liam','Tom'];

names.forEach(function(name,index){

  console.log('forEach,index:',index ,' ',name); 

});


console.log('using arrow functions ');

//Arrow can replace anonymous function .name is the arguements

names.forEach( (name,index ) => {
   console.log('arrowFunct',index ,' '+name);

} );

//the values after the  => is the return 
console.log('Using the shorter version ');

names.forEach( (name,index) => console.log('arrow shorter version:'+ index ,' '+name));


var returnMeInit = function(name){
  return name + '!!!!';
}
console.log(returnMeInit('Martin'));

//this can replace the above .
var returnMe = (name) => name+'!';
console.log(returnMe('Martin'));

//Arrow functions take on their parents this contxt as opposed to below 

console.log("Testing this context with arrow ");

var person = {
  name:'martin',
  greet:function(){

     //var that = this;

     //Note the arrow does not update the this keyword .it still refers to the person object .
     
     names.forEach( (name,index) => {
       console.log(this.name + 'says hi to ' + name);
     })
  }
};

person.greet();

console.log("finished Testing this context with arrow ");

var persons = {
  name:'martin',
  greet:function(){

    
     
     names.forEach(function(name,index){
       console.log(this.name + 'says hi to ' + name);
     })
  }
};



var p = persons.greet.bind(persons);
p();


var data = [ 
                {name:"Samantha", age:12}, 
                 {name:"Alexis", age:14} 
 ];

 var user = {

   data:[
      {name:'T.woods',age:37},
      {name:'P.Michelson',age:43}

   ],
   showData:function(){
         
         var randomNum = ((Math.random () * 2 | 0) + 1) - 1;
         console.log("random number is "+randomNum);
         console.log (this.data[randomNum].name + " " + this.data[randomNum].age);

   }


 }

 //var showDataVar = user.showData;

 var showDataVar = user.showData.bind (user);
 showDataVar();


 function add(a,b){

   var result = a+b;
   return result;
 }


console.log(add(1,3));

var addIt =  (a,b) => a+b;
console.log("Arrow function addIt:"+ addIt(4,4));

var addItAgain = (a,b) => { return a+b};
console.log("Adding again "+addItAgain(5,5));
