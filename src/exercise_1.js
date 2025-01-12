/**
 * Write a function to check if a string is empty 
 * @param {String} text
 * @returns {Boolean}
 * @example
 * isStringEmpty('abc'); => false
 * isStringEmpty(''); => true
 * isStringEmpty('   '); => true
 * isStringEmpty(); => throws error "text must be defined"
 */
function isStringEmpty(text) {
  if (text === undefined) throw new Error("text must be defined");
  return text.trim().length === 0;
}

/**
 * Write a function to truncate text
 * @param {String} text 
 * @param {Number} numberOfCharacters
 * @returns {String} 
 * @example
 * truncateString('Hello World', 2); => 'He'
 * truncateString('Hello world'); => throws error "Please specify number of characters to extract"
 * truncateString(''); => throws error "text must have at least one character"
 */
function truncateString(text, numberOfCharacters) {
  if (!text) throw new Error("text must have at least one character");
    
  if (numberOfCharacters === undefined)
    throw new Error("Please specify number of characters to extract");
  
  return text.slice(0, numberOfCharacters);
}

/**
 * Write a function to create social media post hash tag
 * @param {String} text 
 * @returns {String}
 * @example
 * createHashTag('Hello World'); => '#helloWorld'
 * createHashTag('i love javascript'); => '#iLoveJavascript'
 * createHashTag(''); => throws error "Text should have at least three characters"
 * createHashTag(); => throws error "Text should have at least three characters"
 * createHashTag('   '); => throws error "Text should have at least three characters"
 */

function createHashTag(text) {
  if (!text || text.trim().length < 3) {
    throw new Error("Text should have at least three characters");
  }
  const words = text.trim().toLowerCase().split(/\s+/);
  return (
    "#" +
    words
      .map((word, index) => (index === 0 ? word : word[0].toUpperCase() + word.slice(1)))
      .join("")
  );

}
/**
 * Write a function to format phone number as '+998 99 777 66 55'
 * @param {Number} phoneNumber 
 * @returns {String}
 * @throws {Error} 'Phone number must be either 9 or 12 characters long'
 * @example
 * formatPhoneNumber(998997776655); => '+998 99 777 66 55'
 * formatPhoneNumber(997776655); => '+998 99 777 66 55'
 * formatPhoneNumber(7776655); => throws error "Phone number must be either 9 or 12 characters long"
 * formatPhoneNumber(777665544332211); => throws error "Phone number must be either 9 or 12 characters long"
 * formatPhoneNumber(); => throws error "Phone number must be either 9 or 12 characters long"
 */

function formatPhoneNumber(phoneNumber) {
  const phoneStr = String(phoneNumber);
  if (phoneStr.length !== 9 && phoneStr.length !== 12) {
    throw new Error("Phone number must be either 9 or 12 characters long");
  }
  const normalized = phoneStr.length === 9 ? `998${phoneStr}` : phoneStr;
  return `+${normalized.slice(0, 3)} ${normalized.slice(3, 5)} ${normalized.slice(5, 8)} ${normalized.slice(8, 10)} ${normalized.slice(10)}`;
}

/**
 * Write a function that transforms text to different cases
 * @param {String} text 
 * @param {'camel'|'kebab'|'snake'} caseName - 'camel', 'kebab', 'snake'
 * @returns {String}
 * @example
 * changeTextCase('Hello World', 'camel'); => 'helloWorld'
 * changeTextCase('Hello World', 'kebab'); => 'hello-world'
 * changeTextCase('Hello World', 'snake'); => 'hello_world'
 * 
 */
function changeTextCase(text, caseName) {
  if (!text || !caseName) {
    throw new Error("Invalid input");
  }
  const words = text.toLowerCase().split(/\s+/);
  switch (caseName) {
    case "camel":
      return words
        .map((word, index) => (index === 0 ? word : word[0].toUpperCase() + word.slice(1)))
        .join("");
    case "kebab":
      return words.join("-");
    case "snake":
      return words.join("_");
    default:
      throw new Error("Invalid case name");
  }
} 
/**
 * Write a function to replace a given word in the text with the replacement word
 * @param {String} text - Some text
 * @param {String} word - A word that needs to be replaced
 * @param {String} replacement - A new word that will replace 'word' argument in the 'text'
 * @returns {String}
 * @example
 * const bigText = 'Winnie-the-Pooh (also known as Edward Bear, Pooh Bear or simply Pooh) is a fictional anthropomorphic teddy bear created by English author A. A. Milne and English illustrator E. H. Shepard. Winnie-the-Pooh first appeared by name in a children's story commissioned by London's Evening News for Christmas Eve 1925. The character is inspired by a stuffed toy that Milne had bought for his son Christopher Robin in Harrods department store, and a bear they had viewed at London Zoo.';
 * const replacedWord = 'Pooh';
 * const replacementWord = 'Puff'
 * replaceWordInText(bigText, replacedWord, replacementWord); =>
 * 'Winnie-the-Puff (also known as Edward Bear, Puff Bear or simply Puff) is a fictional anthropomorphic teddy bear created by English author A. A. Milne and English illustrator E. H. Shepard. Winnie-the-Puff first appeared by name in a children's story commissioned by London's Evening News for Christmas Eve 1925. The character is inspired by a stuffed toy that Milne had bought for his son Christopher Robin in Harrods department store, and a bear they had viewed at London Zoo.'
 */
function replaceWordInText(text, word, replacement) {
  if (!text || !word || !replacement) {
    throw new Error("Invalid input");
  }
  const regex = new RegExp(`\\b${word}\\b`, "g");
  return text.replace(regex, replacement);
}

/**
 * Write a function to extract price in number format from the text
 * @param {String} text 
 * @returns {Number}
 * @example
 * extractPriceFromText('Apple price in market is $2.32 per kg now'); => 2.32
 * extractPriceFromText('Apple price in market is $5 per kg now'); => 5
 * extractPriceFromText('There were no apples left in the shop'); => 'No matching price was found'
 */
function extractPriceFromText(text) {
  if (!text) {
    throw new Error("Invalid input");
  }
  const match = text.match(/\$([0-9]+(?:\.[0-9]+)?)/);
  return match ? parseFloat(match[1]) : "No matching price was found";
}

module.exports = {
  changeTextCase,
  createHashTag,
  extractPriceFromText,
  isStringEmpty,
  replaceWordInText,
  truncateString,
  formatPhoneNumber
}