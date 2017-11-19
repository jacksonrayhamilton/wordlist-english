# wordlist-english

A bunch of English words in JSON format.

Words obtained from the [SCOWL][] project. See the `Copyright` file.

[SCOWL]: http://wordlist.aspell.net/

You can import the module as an ES module or using CommonJS:

```js
import wordlist from 'wordlist-english'; // ES Modules
var wordlist = require('wordlist-english'); // CommonJS
```

Obtain all English words which are not exclusive to any dialect of English:

```js
var englishWords = wordlist['english'];

englishWords.slice(2123, 2128)
// => [ 'ailing',
//      'ailment',
//      'ailments',
//      'ails',
//      'ailurophile' ]

englishWords.slice(68999, 69004)
// => [ 'permitted',
//      'permitter',
//      'permitting',
//      'permittivity',
//      'perms' ]
```

Obtain English words exclusive to different dialects of English:

```js
var americanWords = wordlist['english/american'];
var australianWords = wordlist['english/australian'];
var britishWords = wordlist['english/british'];
var canadianWords = wordlist['english/canadian'];

americanWords.indexOf('color') // => 656
britishWords.indexOf('color') // => -1
americanWords.indexOf('colour') // => -1
britishWords.indexOf('colour') // => 677
```

Words are further organized by their frequency of use.  Available frequency
categories are 10, 20, 35, 40, 50, 55, 60, and 70.  The lower the number, the
more frequently the word is believed to be used by English speakers.

```js
var commonEnglishWords = wordlist['english/10'];
var bizarreEnglishWords = wordlist['english/70'];
var commonAmericanWords = wordlist['english/american/10'];

commonEnglishWords.slice(555, 560)
// => [ 'chooses', 'choosing', 'chose', 'chosen', 'church' ]

bizarreEnglishWords.slice(555, 560)
// => [ 'aecium', 'aedes', 'aedile', 'aegrotat', 'aeneous' ]

commonAmericanWords.slice(10, 15)
// => [ 'favor', 'favorite', 'flavor', 'gray', 'judgment' ]
```
