'use strict';

var path = require('path');

module.exports = {};

var nationalities = ['english', 'american', 'british', 'canadian'];

nationalities.forEach(function (nationality) {
    Object.defineProperty(module.exports, nationality, {
        configurable: true,
        enumerable: true,
        get: function () {
            return require(path.join(__dirname, nationality + '-words.json'));
        }
    });
});
