
var $ = require('jquery');
var modules = require('./modules/modules');

// the follow is only to assist debugging in a browser window
window.$ = $;

$(document).ready(function() {
    modules.execute($('.dynamic-module'));
    
    $('#mute').click(function() {
        if (window.toggleSound) { 
            window.toggleSound(); 
        }
    });
});
