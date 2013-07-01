var http = require('http');
var bb = require('bonescript');
var fs = require('fs');

var ledPin = "USR3"; // We'll be blinking USR3
var statReturn = '/'; // Initialize variablebb.pinMode(ledPin, bb.OUTPUT); // Set USR3 to output

//Create a function that is executed every 100 ms. It takes the statReturn
//variable (which is the url requenst parameter string of the URL sent by
//the browser and determines if the LED should be on or off.
setInterval(function() {
 if (statReturn == "/?status=on" || statReturn == "/?status=LED+on") {
  bb.digitalWrite(ledPin, bb.HIGH);
 }
 else if (statReturn == "/?status=off" || statReturn == "/?status=LED+off") {
  bb.digitalWrite(ledPin, bb.LOW);
 }
}, 100);

//This function reads the specified html file and serves it to the web
//browser. It slso strips off the url request parameter string end and saves
//it in the variable 'statReturn'. This variable is used by the function
//above.
fs.readFile('ledToggle.html', function (err, data) {
 if (err) throw err;
 console.log(data);
 http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'html'});
  res.write(data);
  statReturn = req.url;
  console.log(statReturn);
  res.end();
  }).listen(8080);
});
