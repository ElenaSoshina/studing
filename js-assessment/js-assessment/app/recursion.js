exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    const result = []
    function collectFiles(directory) {
      if (!directory || !Array.isArray(directory.files)) {
        return 
      }

      directory.files.forEach(item => {
        if (typeof item === 'string') {
          result.push(item)
        } else if (item && typeof item === 'object' && item.dir) {
          collectFiles(item)
        }
      })
    }

    function findDirectory(directory, searchName) {
      if (directory.dir === searchName) {
        return directory
      }

      if (Array.isArray(directory.files)) {
        for (let item of directory.files) {
          if (item && typeof item === 'object' && item.dir) {
            const foundDir = findDirectory(item, searchName)
            if (foundDir) {
              return foundDir
            }
          }
        }
      }
      return null
    }

    if (dirName) {
      const targetDirectory = findDirectory(data, dirName)

      if (targetDirectory) {
        collectFiles(targetDirectory)
      } 
    } else {
      collectFiles(data)
    }
    return result
  },

  permute: function(arr) {
    if (arr.length <= 1) {
      return [arr]
    }

    const result = []

    for (let i = 0; i < arr.length; i++) {
      const currentEl = arr[i]

      const arrWithOutCurrentEl = arr.slice(0, i).concat(arr.slice(i + 1))
      const permuteArrWithOutCurrentEl = this.permute(arrWithOutCurrentEl)

      permuteArrWithOutCurrentEl.forEach(perm => {
        result.push([currentEl].concat(perm))
      })
    }
    return result
  },

  fibonacci: function(n) {
    if (n === 0) return 0
    if (n === 1) return 1
    if (n < 0) throw new Error('n must be more than 0')

    if (n > 1) {
      return this.fibonacci(n -1) + this.fibonacci(n - 2)
    }
  },

  validParentheses: function(n) {
    if (n === 0) return ['']
    if (n < 0) throw new Error('n must be more than 0')
    if (n === 1) return ['()']

    const combinations = []

    function addBrackets(currentString, openBrackets, closeBrackets) {
      // каждой паре скобок необходимо два символа 
      if (currentString.length === n*2) {
        combinations.push(currentString)
        return
      }

      //n - сколько пар скобок нужно создать, openBrackets - сколько открывающих скобок осталось, closeBrackets - сколько закрывающих скобок осталось
      if (openBrackets < n) {
        addBrackets(currentString + '(', openBrackets + 1, closeBrackets)
      }
      if (closeBrackets < openBrackets) {
        addBrackets(currentString + ')', openBrackets, closeBrackets + 1)
      }
    }
    addBrackets('', 0, 0)
    return combinations

  }
};
