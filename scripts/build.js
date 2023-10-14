// Bundles to output:
// index.js
// common.js
// all.js
// american.js
// americanOnly.js
// australian.js
// australianOnly.js
// british.js
// britishOnly.js
// canadian.js
// canadianOnly.js
// noLocale.js

import fs from 'fs';
import { globSync } from 'glob';

const allFrequencies = [10, 20, 35, 40, 50, 55, 60, 70];

const bundles = [
  {
    name: 'index',
    maxFrequency: 60,
    locales: ['english', 'american', 'australian', 'british', 'canadian'],
  },
  {
    name: 'common',
    maxFrequency: 35,
    locales: ['english', 'american', 'australian', 'british', 'canadian'],
  },
  {
    name: 'all',
    maxFrequency: 70,
    locales: ['english', 'american', 'australian', 'british', 'canadian'],
  },
  {
    name: 'american',
    maxFrequency: 60,
    locales: ['english', 'american'],
  },
  {
    name: 'americanOnly',
    maxFrequency: 60,
    locales: ['american'],
  },
  {
    name: 'australian',
    maxFrequency: 60,
    locales: ['english', 'australian'],
  },
  {
    name: 'australianOnly',
    maxFrequency: 60,
    locales: ['australian'],
  },
  {
    name: 'british',
    maxFrequency: 60,
    locales: ['english', 'british'],
  },
  {
    name: 'britishOnly',
    maxFrequency: 60,
    locales: ['british'],
  },
  {
    name: 'canadian',
    maxFrequency: 60,
    locales: ['english', 'canadian'],
  },
  {
    name: 'canadianOnly',
    maxFrequency: 60,
    locales: ['canadian'],
  },
  {
    name: 'noLocale',
    maxFrequency: 60,
    locales: ['english'],
  },
];

function normalizeWordlist(words) {
  // Filter out possessive words (ending in "'s")
  words = words.filter((word) => !word.endsWith('\'s'));
  // Remove duplicates
  words = [...new Set(words)];
  // Sort all words alphabetically
  words.sort();
  return words;
}

function main() {

  bundles.forEach(({ name, locales, maxFrequency }) => {
    const frequencies = allFrequencies.slice(0, allFrequencies.indexOf(maxFrequency) + 1);
    const files = globSync(
      `sources/{${locales.join(',')}}-words.{${frequencies.join(',')}}`
      // Handle cases where expansion syntax has only one element in it
      .replace(/\{(\w+)\}/, '$1')
    );
    const words = files.reduce((acc, file) => {
      acc.push(...normalizeWordlist(fs.readFileSync(file, 'latin1').trim().split('\n')));
      return acc;
    }, []);
    fs.writeFileSync(`${name}.js`, `export default ${JSON.stringify(words)};`);
  });

}
main();
