'use strict';

var fs = require('fs');
var path = require('path');

function getWordlist(name) {
    var contents = [10, 20, 35, 40, 50, 55, 60, 70].map(function (number) {
        var filePath = path.join(__dirname, '..', 'sources', name + '.' + number);
        return fs.readFileSync(filePath, 'utf8');
    }).join('');

    return contents.split('\n')
        .filter(function (word) {
            if (/'s$/.test(word)) {
                return false;
            }
            return true;
        })
        .sort();
}

var nationalities = ['english', 'american', 'british', 'canadian'];

nationalities.forEach(function (nationality) {
    var filePath = path.join(__dirname, '..', nationality + '-words.json');
    fs.writeFileSync(filePath, JSON.stringify(getWordlist(nationality + '-words')));
});
