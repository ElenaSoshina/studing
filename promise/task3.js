// Задача: Напишите свою реализацию Promise.all

function promiseAll (promises) {
    return new Promise ((resolve, reject) => {
        if (promises.length === 0) {
            resolve([])
            return
        }

        const results = []
        let completed = 0

        promises.forEach((p, index) => {
            Promise.resolve(p)
                .then(value => {
                    results[index] = value
                    completed++

                    if (completed === promises.length) {
                        resolve(results)
                    }
                })
                .catch(reject)
        })
    })
}


// Напишите тело функции getAllItems.
// Она должна возвращать плоский список содержащий все id переданного в неё дерева:
// переданного tree, его детей, детей его детей и так далее.

  

function getAllItems(tree) {
    if (!tree) {
        return []
    }

    const resultIds = [tree.id]

    if (tree.children && tree.children.length > 0) {
        for (let child of tree.children) {
            resultIds.push(...getAllItems(child))
        }
    }

    return resultIds
}

const test_tree = {
  id: 1,
  children: [
    {
      id: 2,
      children: [
        {
          id: 3,
          children: [],
        },
      ],
    },
    {
      id: 4,
      children: [],
    },
  ],
};

console.log(getAllItems(test_tree))