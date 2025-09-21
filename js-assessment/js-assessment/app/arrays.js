exports = typeof window === 'undefined' ? global : window;

const indexOf = function(arr, item) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            return i
        }
    }
    return -1
};

const sum = function(arr) {
    let sum = 0;
    for (let i = 0; i <arr.length; i++) {
        sum += arr[i] //sum = sum + arr[i]
    }
    return sum
};

const remove = function(arr, item) {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== item) {
            result.push(arr[i])
        }
    }
    return result
};

const removeWithoutCopy = function(arr, item) {
    for (let i = arr.length -1; i >= 0; i--) {
        if (arr[i] === item) {
            arr.splice(i, 1)
        }
    }
    return arr
};

const append = function(arr, item) {
    // arr.push(item)
    // return arr

    const result = [...arr, item]
    return result
};

const truncate = function(arr) {
    // arr.pop()
    // return arr

    const result = []
    for (let i = 0; i < arr.length -1; i++) {
        result[i] = arr[i]
    }
    return result
};

const prepend = function(arr, item) {
    // arr.unshift(item)
    // return arr

    const result = [item, ...arr]
    return result
};

const curtail = function(arr) {
    // arr.shift()
    // return arr

    const result = []
    for (let i = 1; i < arr.length; i++) {
        result[i-1] = arr[i]
    }
    return result
};

const concat = function(arr1, arr2) {
    // return arr1.concat(arr2)
    const result = []
    for (let i = 0; i < arr1.length; i++) {
        result[i] = arr1[i]
    }
    for (let i = 0; i < arr2.length; i++) {
        result[arr1.length + i] = arr2[i]
    }
    return result
};

const insert = function(arr, item, index) {
    // arr.splice(index, 0, item)
    // return arr
    const result = []
    for (let i = 0; i < index; i++) {
        result[i] = arr[i]
    }
    result[index] = item
    for (let i = index; i < arr.length; i++) {
        result[i + 1] = arr[i]
    }
    return result
};

const count = function(arr, item) {
    return arr.filter(i => i === item).length
};

const duplicates = function(arr) {
    const dublicates = []
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) !== i && !dublicates.includes(arr[i])) {
            dublicates.push(arr[i])
        }
    }
    return dublicates
    
};

const square = function(arr) {
    return arr.map(i => i * i)
};

const findAllOccurrences = function(arr, target) {
    const occurrences = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            occurrences.push(i)
        }
    }
    return occurrences
};
//

const arraysAnswers = {
    indexOf,
    sum,
    remove,
    removeWithoutCopy,
    append,
    truncate,
    prepend,
    curtail,
    concat,
    insert,
    count,
    duplicates,
    square,
    findAllOccurrences
};


exports.asyncAnswers = arraysAnswers;
