ledToggle.beaglebone
====================

Toggle an LED with beaglebone through a web interface.

This code consists of two files: ledToggle.js and ledToggle.html.   

The javascript file impements a web server in node.js.  The file serves up ledToggle.html.

The html file has a form with two buttons.  Pushing the buttons sends a request to the server with the request query string either set to "/?status=on" or "/?status=off".   The webserver reads the query string and turns on (or off) an LED in response.
