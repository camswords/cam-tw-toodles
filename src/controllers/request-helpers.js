
module.exports = function(request, response, next) {
    
    response.locals.path = require('../infrastructure/path');
    response.locals.config = require('../config');

    next();
};
