exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function (fn, obj) {
    return fn.call(obj)
  },

  iterate: function (obj) {
    const result = []
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        result.push(`${key}: ${obj[key]}`)
      }
    }
    return result
  },
};
