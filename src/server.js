var express = require('express');
var config = require('./config');
var path = require('path');

var webServer = express();

webServer.use(express.static(path.join(process.cwd(), 'public')));
webServer.set('views', __dirname + '/views');
webServer.set('view engine', 'jade');
webServer.use(require('./controllers/request-helpers'));
webServer.use(function(request, response) { response.render('index'); });

webServer.listen(config.port(), function() {
    console.log('started cam-tw-toodles on port ' + config.port() + '. Using configuration for ' + config.environment() + '.');
});
