exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    let resultStr = ''
    let countChars = 0
    let currentChar = null

    for (let i = 0; i < str.length; i++) {
      const char = str[i]

      if (char === currentChar) {
        countChars++
      } else  {
        countChars = 1
        currentChar = char
      }

      if (countChars <= amount) {
        resultStr += char
      }
    }

    return resultStr
  },

  wordWrap: function(str, cols) {
    if (!str || cols <= 0) return str

    const fullWord = str.split(' ')
    const lines = []
    let currentLine = ''

    for (let i = 0; i < fullWord.length; i++) {
      const word = fullWord[i]

      if (currentLine === '') {
        currentLine = word
      } else if ((currentLine + ' ' + word).length <= cols) {
        currentLine += ' ' + word
      } else {
        lines.push(currentLine)
        currentLine = word
      }
    }

    if (currentLine) {
      lines.push(currentLine)
    }
    return lines.join('\n')
  },

  reverseString: function(str) {

    // let result = '';
    // for (let i = str.length - 1; i >= 0; i--) {
    //   result += str[i];
    // }
    // return result;

    // return Array.from(str).reverse().join('');

    return str.split('').reverse().join('')
  }
};
