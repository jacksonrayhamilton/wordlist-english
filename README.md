# wordlist-english

A bunch of English words in JSON format.

Words obtained from the [SCOWL][] project. See the `Copyright (SCOWL)` file.

[SCOWL]: http://wordlist.aspell.net/

## Usage

The simplest way to use this package is to install it with NPM and to import the default export from “wordlist-english”:

```
npm install wordlist-english
```

```js
import englishWords from 'wordlist-english';

englishWords[2**12] // => 'auditor'
englishWords[2**13] // => 'bridle'
englishWords[2**14] // => 'crude'
englishWords[2**15] // => 'highways'
englishWords[2**16] // => 'soar'
```

However, if you are using the words in a web application, it may be wiser to use a [dynamic import][] so you can more quickly serve your web page—i.e., without waiting for a large list of words to download as part of your main JavaScript bundle.

[dynamic import]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import

```js
const englishWords = (await import('wordlist-english')).default;
// The words won’t be available synchronously, but depending on how your
// application works it might be okay or preferable to load the words in the
// background or on-demand.
```

## Available Lists

To see examples of the types of words in each list, see [SAMPLES.md](SAMPLES.md).

### Default List (270kb gzipped)

If you simply want a big list of English words that most English speakers would possibly say or write (all dialects included: American, Australian, British, Canadian), then import the package’s index file:

```js
import englishWords from 'wordlist-english';
```

### Full List (406kb gzipped)

If you want an even larger list of words that includes very obscure words (for word games), then import the “all” file:

```js
import allWords from 'wordlist-english/all';
```

### Smaller List (120kb gzipped)

If you want a smaller list of words that are more commonly-used, then import the “common” file:

```js
import commonWords from 'wordlist-english/common';
```

This list won’t be as useful for spell checking, but it still offers an abundance of words, without too many “strange” words mixed-in.

### Smallest List (12kb gzipped)

The smallest list of words that this package offers includes only the most-commonly-used English words.  You are unlikely to ever encounter a “strange” word.  It will have a minimal impact on page load in web applications.

```js
import veryCommonWords from 'wordlist-english/veryCommon';
```

### Dialectal Lists

If you want a big list of English words including only spellings true to a particular dialect of English (e.g. American spellings, without Australian/British/Canadian spellings), then use these lists:

```js
import americanWords from 'wordlist-english/american';
import australianWords from 'wordlist-english/australian';
import britishWords from 'wordlist-english/british';
import canadianWords from 'wordlist-english/canadian';
```

Note that each of the above lists is about the same size as the default list.

If you want to implement an application that supports multiple dialects of English, you may wish to import a list of words common to all locales, and combine that list with a smaller list of words exclusive to a chosen locale:

```js
import noLocaleWords from 'wordlist-english/noLocale';
import americanOnlyWords from 'wordlist-english/americanOnly';
import australianOnlyWords from 'wordlist-english/australianOnly';
import britishOnlyWords from 'wordlist-english/britishOnly';
import canadianOnlyWords from 'wordlist-english/canadianOnly';

let words;
if (lang === 'en-US') words = [...noLocaleWords, ...americanOnlyWords]
else if (lang === 'en-AU') words = [...noLocaleWords, ...australianOnlyWords]
else if (lang === 'en-GB') words = [...noLocaleWords, ...britishOnlyWords]
else if (lang === 'en-CA') words = [...noLocaleWords, ...canadianOnlyWords]
```
