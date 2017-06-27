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

//sumbit a name
var nameInput=document.getElementById("name");
var name= nameInput.value;
var submit = document.getElementById("sub_btn");
submit.onclick = function() {
    //make a request to server and send the name
    
    //capture list of names and render it
    var names=['name1','name2','name'];
    var list='',i;
    
    for(i = 0; i<names.length;i++) {
        list += '<li>' + names[i]+ '</li>'; 
    }
    document.getElementById("list").innerHTML=list;
    
    
};