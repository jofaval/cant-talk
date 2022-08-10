/**
 * Parses a text not to include any sort of curse words
 * 
 * @param {String} text The text to parse
 * @returns {String} Parsed text
 */
function noCurse(text) {
    return text;
}

/**
 * Checks if a text is empty or not
 * 
 * @param {String} text The text to check
 * @returns {Boolean} Is it empty?
 */
function isEmpty(text) {
    const result = !noSpaces(text).length
    // console.log('¿Está el texto vacío?', text, result);
    return result;
}

/**
 * Parses a text not to include any sort of spaces
 * 
 * @param {String} text The text to check
 * @returns {String} Parsed text
 */
function noSpaces(text) {
    const result = text.replace(' ', '')
    // console.log('Quitarle espacios al texto', text, result);
    return result;
}