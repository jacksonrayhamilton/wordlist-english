# wordlist-english

A bunch of English words in JSON format.

Words obtained from the [SCOWL][] project. See the `Copyright` file.

[SCOWL]: http://wordlist.aspell.net/

```js
var wordlist = require('wordlist-english');
var englishWords = wordlist['english'];
var americanWords = wordlist['english/american'];
var britishWords = wordlist['english/british'];
var canadianWords = wordlist['english/canadian'];

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

americanWords.indexOf('color') // => 656
britishWords.indexOf('color') // => -1
americanWords.indexOf('colour') // => -1
britishWords.indexOf('colour') // => 677
```
