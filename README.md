# wordlist-english

A bunch of English words in JSON format.

Words obtained from the [SCOWL][] project. See the `Copyright` file.

[SCOWL]: http://wordlist.aspell.net/

## Usage

Install this package with NPM and import English words from the various lists.

```
npm install wordlist-english
```

```js
import commonToAllLocales from 'wordlist-english/english.js';
import americanSpellingsOnly from 'wordlist-english/american.js';
import britishSpellingsOnly from 'wordlist-english/british.js';

commonToAllLocales[2**12] // => 'affection'
commonToAllLocales[2**13] // => 'paged'
commonToAllLocales[2**14] // => 'cuticles'
commonToAllLocales[2**15] // => 'sleets'
commonToAllLocales[2**16] // => 'antineutrino'

americanSpellingsOnly[2**0] // => 'among'
americanSpellingsOnly[2**1] // => 'analog'
americanSpellingsOnly[2**2] // => 'backwards'
americanSpellingsOnly[2**3] // => 'color'
americanSpellingsOnly[2**4] // => 'labeled'

britishSpellingsOnly[2**0] // => 'amongst'
britishSpellingsOnly[2**1] // => 'apologise'
britishSpellingsOnly[2**2] // => 'behaviour'
britishSpellingsOnly[2**3] // => 'chequed'
britishSpellingsOnly[2**4] // => 'flavour'
```

If you are using the words in a web application, it may be wiser to use a [dynamic import][] so you can more quickly serve your web page—i.e., without waiting for a large list of words to download as part of your main JavaScript bundle.

[dynamic import]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import

```js
const words = (await import('wordlist-english/english.js')).default;
// The words won’t be available synchronously, but depending on how your
// application works it might be okay or preferable to load the words in the
// background or on-demand.
```

## Available Lists

To see examples of the types of words in each list, see [EXAMPLES.md](EXAMPLES.md).

### Words Common to All Locales

```js
import commonToAllLocales from 'wordlist-english/english.js';
```

### Words Appearing in Certain Locales

```js
import americanSpellingsOnly from 'wordlist-english/american.js';
import australianSpellingsOnly from 'wordlist-english/australian.js';
import britishSpellingsOnly from 'wordlist-english/british.js';
import canadianSpellingsOnly from 'wordlist-english/canadian.js';
```

### Words of Various Frequencies

```js
import english10 from 'wordlist-english/english10.js';
import english20 from 'wordlist-english/english20.js';
import english35 from 'wordlist-english/english35.js';
import english40 from 'wordlist-english/english40.js';
import english50 from 'wordlist-english/english50.js';
import english55 from 'wordlist-english/english55.js';
import english60 from 'wordlist-english/english60.js';
import english70 from 'wordlist-english/english70.js';
```

```js
import american10 from 'wordlist-english/american10.js';
import american20 from 'wordlist-english/american20.js';
import american35 from 'wordlist-english/american35.js';
import american40 from 'wordlist-english/american40.js';
import american50 from 'wordlist-english/american50.js';
import american55 from 'wordlist-english/american55.js';
import american60 from 'wordlist-english/american60.js';
import american70 from 'wordlist-english/american70.js';
```

```js
import australian10 from 'wordlist-english/australian10.js';
import australian20 from 'wordlist-english/australian20.js';
import australian35 from 'wordlist-english/australian35.js';
import australian40 from 'wordlist-english/australian40.js';
import australian50 from 'wordlist-english/australian50.js';
import australian55 from 'wordlist-english/australian55.js';
import australian60 from 'wordlist-english/australian60.js';
import australian70 from 'wordlist-english/australian70.js';
```

```js
import british10 from 'wordlist-english/british10.js';
import british20 from 'wordlist-english/british20.js';
import british35 from 'wordlist-english/british35.js';
import british40 from 'wordlist-english/british40.js';
import british50 from 'wordlist-english/british50.js';
import british55 from 'wordlist-english/british55.js';
import british60 from 'wordlist-english/british60.js';
import british70 from 'wordlist-english/british70.js';
```

```js
import canadian10 from 'wordlist-english/canadian10.js';
import canadian20 from 'wordlist-english/canadian20.js';
import canadian35 from 'wordlist-english/canadian35.js';
import canadian40 from 'wordlist-english/canadian40.js';
import canadian50 from 'wordlist-english/canadian50.js';
import canadian55 from 'wordlist-english/canadian55.js';
import canadian60 from 'wordlist-english/canadian60.js';
import canadian70 from 'wordlist-english/canadian70.js';
```

## Combining Lists

### Creating an American-oriented Dictionary

```js
import commonToAllLocales from 'wordlist-english/english.js';
import americanSpellingsOnly from 'wordlist-english/american.js';

const americanDictionary = [...commonToAllLocales, ...americanSpellingsOnly];
```

### Creating a List of Words Common in American Usage

```js
import english10 from 'wordlist-english/english10.js';
import american10 from 'wordlist-english/american10.js';

const commonAmericanWords = [...english10, ...american10];
```
