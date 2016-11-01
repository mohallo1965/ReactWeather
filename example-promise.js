function getTempCallback(location,callback){

    callback(undefined,78);
    callback('City not found');

}

getTempCallback('Philedelphia',function(err,temp){
     
     if(err){
         console.log('error',err);
     }else{
         console.log('success',temp)
     }
});



function getTempPromise(location){

    return new Promise(function(resolve ,reject){

        setTimeout(function(){
             resolve(79);
             reject('City not found')
        },1000);

        console.log("doing my stuff");
        
    });
}

getTempPromise('Philedelphia').then(function(temp){

     console.log('promise successss',temp);
},function(err){
    console.log('promise error',err);

});



function addPromise(a,b){
   return new Promise(function(resolve,reject){

       if( ( (typeof a === 'number' && a != null ) && (typeof b === 'number' && b != null ) )){
             resolve(a+b);
       }else{
           reject('Provide Numeric valid values for a and b');
       }

   });

}

addPromise(1,2).then(function(resultString){
     console.log('Success result is:'+resultString);
},function(err){
    console.log('Result Error',err);

});