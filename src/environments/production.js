
module.exports = {
    environment: function() { return "production"; },
    port: function() { return Number(process.env.PORT); },
    url: function() { return 'https://toodles-tw.herokuapp.com/'; },
    googleAnalyticsApiKey: function() { return process.env.GOOGLE_ANALTICS_TRACKING_ID; }
};
