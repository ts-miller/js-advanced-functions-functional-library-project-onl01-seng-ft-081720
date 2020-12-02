const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, alert) {
      const newArray = (collection instanceof Array) ? collection : Object.values(collection)

      for (const elem of newArray) {
        alert(elem)
      }  
      return collection
    },

    map: function(collection, callback) {
      const array = (collection instanceof Array) ? collection : Object.values(collection)
      let newArray = []
      for (const elem of array) {
        newArray.push(callback(elem))
      }
      return newArray
    },

    reduce: function(collection, callback, acc) {
      if (!acc) {
        acc = collection[0]
        collection = collection.slice(1)
        console.log(collection)
      }
      for(const val of collection) {
        acc = callback(acc, val, collection)
      }
      return acc
    },

    find: function(collection, predicate) {
      for (const num of collection) {
        if (predicate(num)) return num;
      }
    },

    filter: function(collection, predicate) {
      const filtered = []
      for (const num of collection) {
        if (predicate(num)) filtered.push(num)
      }
      return filtered
    },

    size: function(collection) {
      return Object.keys(collection).length
    },

    first: function(array, n) {
      return (!!n) ? array.slice(0, n) : array[0]
    },

    last: function(array, n) {
      return (!!n) ? array.slice(-n) : array.slice(-1)[0]
    },

    compact: function(array) {
      let newArray = []
      for (const elem of array) {
        if (!!elem === true) newArray.push(elem)
      }
      return newArray
    },

    sortBy: function(array, callback) {
      const newArray = [...array]
      return newArray.sort(function(a, b) {
        return callback(a) - callback(b)
      })
    },

    unpack: function(newArray, array) {
      for (let elem of array) {
        newArray.push(elem)
      }
    },

    flatten: function(array, shallow, newArray = []) {
      if (!Array.isArray(array)) return newArray.push(array)
      if (shallow) {
        for (let elem of array) {
          Array.isArray(elem) ? this.unpack(newArray, elem) : newArray.push(elem)
        }
      } else {
        for (let elem of array) {
          this.flatten(elem, false, newArray)
        }
      }
      return newArray
    },

    uniqSorted: function(collection, iteratee) {
      const sorted = [collection[0]]
      for (let idx = 1; idx < collection.length; idx++) {
        if (sorted[idx-1] !== collection[idx])
          sorted.push(collection[idx])
      }
      return sorted
    },

    uniq: function(collection, sorted=false, iteratee=false) {
      if (sorted) {
        return fi.uniqSorted(collection, iteratee)
      } else if (!iteratee) {
        return Array.from(new Set(collection))
      } else {
        const modifiedVals = new Set()
        const uniqVals = new Set()
        for (let val of collection) {
          const moddedVal = iteratee(val)
          if (!modifiedVals.has(moddedVal)) {
            modifiedVals.add(moddedVal)
            uniqVals.add(val)
          }
        }
        return Array.from(uniqVals)
      }
    },

    keys: function(obj) {
      const keys = []
      for (let key in obj){
        keys.push(key)
      }
      return keys
    },

    values: function(obj) {
      const values = []
      for (let key in obj){
        values.push(obj[key])
      }
      return values
    },

    functions: function(obj) {
      const functionNames = []

      for (let key in obj) {
        if (typeof obj[key] === "function"){
          functionNames.push(key)
        }
      }

      return functionNames.sort()
    },



  }
})()

fi.libraryMethod()
