var button = document.getElementById("counter");
var counter = 0;
button.onclick= function (){
  //make a request to counter endpoint
  
  //capture the response and store in variable
  
  //render the variable in the correct span
  counter++;
  document.getElementById("count").innerHTML=counter.toString();
};