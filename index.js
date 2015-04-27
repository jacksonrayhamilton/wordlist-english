'use strict';

var path = require('path');

module.exports = {};

var nationalities = ['english', 'american', 'british', 'canadian'];

nationalities.forEach(function (nationality) {
    // Backwards compatibility; provide "english/american" and "american"
    // property names.
    [
        'english/' + nationality,
        nationality
    ].forEach(function (prefixedNationality) {
        Object.defineProperty(module.exports, prefixedNationality, {
            configurable: true,
            enumerable: true,
            get: function () {
                return require(path.join(__dirname, nationality + '-words.json'));
            }
        });
    });
});
