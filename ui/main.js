var button = document.getElementById("counter");

button.onclick= function (){
  //create a request to counter endpoint
  var request= new XMLHttpRequest();
  
  //capture the response and store in variable
    request.onreadystatechange = function () {
      if (request.readyState === XMLHttpRequest.DONE) {
          if(request.status === 200 ) {
              var counter = request.responseText;
               document.getElementById("count").innerHTML=counter.toString();
          }
      }  
    }; 
  //make the request
    request.open('GET','http://ajeyasidd.imad.hasura-app.io/counter',true);
    request.send(null);
 
};