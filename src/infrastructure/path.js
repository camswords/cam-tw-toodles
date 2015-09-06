var config = require('../config');

module.exports = {
    toStylesheet: function() {
        return config.url() + 'styles.css';
    },
    toJavascript: function() {
        return config.url() + 'scripts.js';
    }
};
