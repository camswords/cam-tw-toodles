var extend = require('extend');
var environmentConfig = require('./environments/' + (process.env.NODE_ENV || 'localhost') );

module.exports = extend({}, environmentConfig);
