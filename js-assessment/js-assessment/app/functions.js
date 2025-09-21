exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    //apply - вызывает функцию с заданным контекстом this
    // return fn.apply(null, arr)

    return fn(...arr)
  },

  speak: function(fn, obj) {
    //call - вызывает функцию с заданным контекстом this и отдельными аргументами 
    //apply - вызывает функцию с заданным контекстом this и аргументами в виде массива
    //bind - возвращает новую функцию с заданным контекстом this (не вызывается срзу!!!)

    // return fn.call(obj)
    // return fn.apply(obj)
    return fn.bind(obj)()
  },

  functionFunction: function(str) {
    return function(str2) {
      return `${str}, ${str2}`
    }
  },

  makeClosures: function(arr, fn) {
    // const result = []

    // for (let i = 0; i < arr.length; i++) {
    //   result.push(function() {
    //     return fn(arr[i])
    //   })
    // }
    // return result

    return arr.map(function(item) {
      return function() {
        return fn(item)
      }
    })
  },

  partial: function(fn, str1, str2) {
    return function(str3) {
      return fn(str1, str2, str3)
    }
  },

  useArguments: function() {
    let sum  = 0
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i]
    }
    return sum
  },

  callIt: function(fn) {
    const func = arguments[0]
    const args = []
    for (let i = 1; i < arguments.length; i++) {
      args.push(arguments[i])
    }
    return fn.apply(null, args)

  },

  partialUsingArguments: function(fn) {
    const fixedArguments = []
    for (let i = 1; i < arguments.length; i++) {
      fixedArguments.push(arguments[i])
    }

    return function() {
      const newArguments = []
      for (let i = 0; i < arguments.length; i++) {
        newArguments.push(arguments[i])
      }
      return fn.apply(null, fixedArguments.concat(newArguments))
    }
  },

  curryIt: function(fn) {
    // Каррирование - это преобразование функции от нескольких аргументов в последовательность функций, каждая из которых принимает один аргумент.
    const totalArguments = fn.length

    function collectArgs(collectedArgs) {
      return function(newArgs) {
        const allArgs = collectedArgs.concat(newArgs)

        if (allArgs.length === totalArguments) {
          return fn.apply(null, allArgs)
        } else {
          return collectArgs(allArgs)
        }
      }
    }
    return collectArgs([])
  }
};
