// This file includes examples of the new v2 API

// Recommended size for spell checker is 60
// Recommended size for word games is 70
// Recommended size for common words is 35

// Easy mode (includes all words across all locales and frequences 60 and below)
import wordlist from 'wordlist-english';
console.log(wordlist); // string[]

// Includes frequencies 35 and below across all locales
import commonWords from 'wordlist-english/common';
console.log(commonWords); // string[]

// Includes all frequencies across all locales
import allWords from 'wordlist-english/all';
console.log(allWords); // string[]

// British words + English words common across all locales (60 and below)
import britishWords from 'wordlist-english/british';
console.log(britishWords); // string[]

// British words only (60 and below)
import britishWordsOnly from 'wordlist-english/britishOnly';
console.log(britishWordsOnly); // string[]

// Locale-agnostic words only (60 and below)
import wordsWithoutLocale from 'wordlist-english/noLocale';
console.log(wordsWithoutLocale); // string[]
