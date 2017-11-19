'use strict';

var path = require('path');

var wordlist = {};

['english', 'american', 'british', 'canadian'].forEach(function (dialect) {
  var dialectKey = dialect === 'english' ? dialect : 'english/' + dialect;
  var dialectWords = [];
  [10, 20, 35, 40, 50, 55, 60, 70].forEach(function (frequency) {
    var frequencyKey = dialectKey + '/' + frequency;
    var frequencyWords = require(path.join(__dirname, dialect + '-words-' + frequency + '.json'));
    wordlist[frequencyKey] = frequencyWords;
    dialectWords.push(...frequencyWords);
  });
  wordlist[dialectKey] = dialectWords.sort();
});

module.exports = wordlist;
