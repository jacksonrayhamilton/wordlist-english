import fs from 'fs';

const allFrequencies = [10, 20, 35, 40, 50, 55, 60, 70];
const allCategories = ['american', 'australian', 'british', 'canadian', 'english'];

function normalizeWordlist(words) {
  // Filter out "G'day", "OK", proper nouns,
  // and possessive words (ending in "'s")
  words = words.filter((word) => !/^[A-Z]/.test(word) && !word.endsWith('\'s'));
  // Remove duplicates
  words = [...new Set(words)];
  // Sort all words alphabetically
  words.sort();
  return words;
}

function writeIndexBundleForCategory(category) {
  const template = [
    ...allFrequencies.map((frequency) => {
      return `import ${category}${frequency} from './${category}${frequency}.js';`;
    }),
    `export default [${allFrequencies.map((frequency) => {
      return `...${category}${frequency}`;
    }).join(', ')}];`
  ].join('\n');
  fs.writeFileSync(`${category}.js`, template);
}

function main() {
  allCategories.forEach((category) => {
    writeIndexBundleForCategory(category);
    allFrequencies.forEach((frequency) => {
      const sourceFilePath = `sources/${category}-words.${frequency}`;
      const words = normalizeWordlist(
        fs.readFileSync(sourceFilePath, 'latin1').trim().split('\n')
      );
      fs.writeFileSync(
        `${category}${frequency}.js`,
        `export default ${JSON.stringify(words)};`
      );
    });
  });
}

main();
