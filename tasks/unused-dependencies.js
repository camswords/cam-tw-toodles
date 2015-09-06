var Promise = require('bluebird');
var _ = require('lodash');
var thisPackage = require('../package.json');
var spawn = require('child_process').spawn;
var config = require('../src/config');

var listPackages = function() {
    var blacklist = [/jade/, /require-dir/];

    return _.filter(Object.keys(thisPackage.dependencies), function(packageName) {
        return !_.find(blacklist, function(blacklistItem) { return packageName.match(blacklistItem); });
    });
};

var checkPackage = function(packageName) {
    
    return new Promise(function(resolve) {
        var args = ['-rnw', './src', './assets', './tasks', '-e', 'require..' + packageName + '.'];
        var process = spawn('/usr/bin/grep', args);
        
        process.on('exit', function(exitCode) {
            if (exitCode) {
                return resolve({ name: packageName, used: false });
            }

            return resolve({ name: packageName, used: true });
        });
    });
    
};

var checkPackages = function(packageNames) {
    var allChecked = _.map(packageNames, function(packageName) { return checkPackage(packageName); });
    return Promise.all(allChecked);
};


module.exports = function() {
    
    return Promise.resolve().then(listPackages).then(checkPackages).then(function(results) {
        
        var unused = _.filter(results, function(result) { return !result.used; });
        
        if (unused.length) {
            console.log('\x1b[31mUnused npm modules in package.json!\x1b[0m');
            console.log(_.pluck(unused, 'name'));
            process.exit(1);
        }

        console.log("\x1b[32mFound no unused npm modules in package.json :-)\x1b[0m");
        
    }).catch(function(error) {
        console.log('failed to check unused dependencies due to', error.stack);
        process.exit(1);
    });
};
