var $ = require('jquery');

module.exports = function() {

    if (window.ga) {
        return $.Deferred().resolve(window.ga).promise();
    }

    var options = {
        url: 'https://www.google-analytics.com/analytics.js',
        dataType: 'script'
    };

    var onSuccess = function () { return window.ga; };
    var onError = function (error) { console.log('failed to load google analytics due to', error); };

    return $.ajax(options).then(onSuccess).fail(onError);
};
