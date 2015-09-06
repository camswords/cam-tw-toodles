var googleAnalytics = require('../infrastructure/google-analytics');

module.exports = function(data) {

    if (!data || !data.trackingId) {
        return;
    }

    googleAnalytics().then(function(ga) {
        ga('create', data.trackingId, 'auto');
        ga('send', 'pageview');
    });
};
