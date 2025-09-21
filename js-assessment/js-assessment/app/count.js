exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    let current = start
    console.log(current)

    if (current === end) {
      return {
        cancel: function () {
          
        }
      }
    }

    current++
    
    const intervalId = setInterval(() => {
      console.log(current)

      if (current === end) {
        clearInterval(intervalId)
      } else {
        current++
      }
    }, 100)

    return {
    cancel: function() {
      clearInterval(intervalId)
    }
  }
  }
};
