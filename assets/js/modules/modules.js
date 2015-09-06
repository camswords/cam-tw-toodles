
var _ = require('lodash');
var $ = require('jquery');

var registeredModules = {
    'track-page-view': require('./track-page-view')
};

module.exports = {
    execute: function (modules) {
        _.each(modules, function (module) {
            var data = $(module).data();
            data.$module = $(module);
            data.moduleDomElement = module;

            if (!data || !data.name) {
                console.log('modules: failed to find module-name on element', module);
                return;
            }

            if (!registeredModules[data.name]) {
                console.log('modules: failed to find module with name', data.name, ', will not execute module.');
                return;
            }

            registeredModules[data.name](data);
        });
    }
};
