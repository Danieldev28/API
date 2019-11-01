// var Starwarsapi =new XMLHttpRequest();
// var theResponse;
// Starwarsapi.open("GET", "https://swapi.co/api/people/");

// Starwarsapi.onreadystatechange = function(){
//     if (this.readyState == 4 && this.status == 200){
//     theResponse = JSON.parse(this.responseText);
//     console.log(theResponse.results[4].name);
//     var resultArray = theResponse.results;
//     for(var i = 0; i < resultArray.length; i++){
//     console.log(resultArray[i].name);
//     $("#myDiv").append("<p>" + resultArray[i].name + "</p>");
//     //  $("#myDiv").append("<p>" + resultArray[i].mass + "</p>");
//         }
//     }
// }

// $("#myButton").on("click", function(){
//     Starwarsapi.send();
// });


var Starwarsapi = new XMLHttpRequest();
var myResponse;
var link;

Starwarsapi.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200 ){
        myResponse = JSON.parse(this.responseText);
        $("#temp").append(Math.round(myResponse.main.temp - 273.15)+ "  ");
        console.log(myResponse);
            $("#temp").append(Math.round(myResponse.visibility) + "  ");
             $("#temp").append(myResponse.wind.speed + "  ");
              $("#temp").append(myResponse.weather[0].description + "  ");
               $("#temp").append(myResponse.sys.sunset + "  ");
             
    }
    
}

// email 1
$("#myButton").on("click", function(){
    link = "https://api.openweathermap.org/data/2.5/weather?q=" + $("#city").val() + "&APPID=f8d228a07684eb4061cb38629b363a1c";
    Starwarsapi.open("GET", link);
    Starwarsapi.send();
});

$("#emailEntry").on("click", function(){
    var template_params = {
}

var service_id = "default_service";
var template_id = "dummy_t";
emailjs.send(service_id, template_id, template_params);
});


// email 2
$("#subscriberButton").on("click", function(){
var template_params = {
   "reply_to": "reply_to_value",
   "daniel": "daniel_value",
   "to_name": "to_name_value",
   "from_name": "from_name_value",
   "message_html": "message_html_value"
}

var service_id = "default_service";
var template_id = "template_jyLHx8AM";
emailjs.send(service_id, template_id, template_params);
});


// email 3 parameters
$("#subscriberButton").on ("click", function(){
  subscribeEmail();  
});

function subscribeEmail(){
   var email = $("#email_address").val();
   var message = $("#message_me").val();
   var template_params = {
   "to_email": email ,
   "from_name": "daniel",
   "subject_message": "I am prefillingt the subject message",
   "body_message": message
}

var service_id = "default_service";
var template_id = "dummy_t";
emailjs.send(service_id, template_id, template_params);
};




// email 4 and 5


  
function emailThis(theMessage,email_recipient, subject_name) {
  var template_params = {
  "to_email": email_recipient,
  "from_name": "Daniel",
  "subject_message": subject_name,
  "body_message": theMessage
}

var service_id = "default_service";
var template_id = "dummy_t";
emailjs.send(service_id, template_id, template_params);
};

$("#email_Button").on("click", function(){
  var rec_name = $("#subscriber_address").val();
  var masaage_body = "thanks for registering";
  var subject_name = "registration"
  emailThis(masaage_body, rec_name, subject_name);  
  

});


$("#subscriberButton").on("click", function(){
  var rec_name = $("#subscriber_address").val();
  var masaage_body = "thanks for Subscribing";
  var subject_name = "Subscription"
  emailThis(masaage_body, rec_name, subject_name);  
  

});