fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(arr, iteratee){
      for(let i = 0; i < arr.length;i++){
        let element = arr[i]
        let index = i
        iteratee(element, index, arr)
      }
      return arr
    },

    // map: function(arr, iteratee){
    //   var returnArr= []
    //   for (let i = 0; i < arr.length; i++){
    //     let element = arr[i];
    //     returnArr.push(iteratee(element))
    //     debugger;
    //   }
    //   return returnArr;
    // },
    map: function(arr, iteratee){
      var returnArr= []
      if (Array.isArray(arr)){
        for (let i = 0; i < arr.length; i++){
          let element = arr[i];
          returnArr.push(iteratee(element))
        }
      } else if (typeof arr === 'object'){
        for (let key in arr) {
          let value = arr[key];
          returnArr.push(iteratee(value))
        }
      }
      return returnArr;
    },
    // return first element that is true
    find: function(arr, truthTest){
      for(let i = 0; i < arr.length;i++){
        let element = arr[i];
        if (truthTest(element)){

          return element
        }
      }
    },

    filter: function(arr,truthTest){
      var newArr = []

      for(let i = 0; i < arr.length;i++){
        let element = arr[i];
        if (truthTest(element)){
          newArr.push(element)
        }
    }
      return newArr;
  },

    reduce: function(arr, callback, memo) {
        let total = memo;

        arr.forEach(a => {
        total = callback(total, a);
        });
      return total;
        },


      sortBy: function(arr, iteratee){
        let newArr = []
        for(let i = 0; i < arr.length; i++){
          let element = arr[i]
          newArr.push(iteratee(element))
        }
        debugger;
        newArr.sort()
      },

      first: function(array){
          return array[0]
        },

      last: function(array){
          return array[array.length-1]
      },

      size: function(array) {
        if (Array.isArray(array)) {
          return array.length
        } else {
          let counter = 0
          for(let i in array){
          counter++
        }
        return counter;
      }
    },

    compact: function(array) {
        var newArr = []
          for (let i =0; i < array.length; i++){
            if (array[i]) {
              newArr.push(array[i])
            }
          }
          return newArr
      },

      uniq: function (array) {

      var sorted_arr = array.sort();
      var results = [];
      for (var i = 0; i < array.length; i++) {
          if (sorted_arr[i + 1] !== sorted_arr[i]) {
              results.push(sorted_arr[i]);
          }
      }
      return results;
  },
      keys: function(object){
        let objKeys = []
        for (let keys in object) {
        objKeys.push(keys)
        }
        return objKeys;
      },

      values: function(object){
        let values = []
        for (let keys in object){
          values.push(object[keys])
        }
          return values;
      },

      // functions: function(object){
      //   return Object.getOwnPropertyNames(object) {
      //          return typeof object[property] == 'function';
      //      };
      // }

      functions: function(object) {
        let methods = []
        for (let key in object) {
          if (typeof object[key] == 'function') {
            methods.push(key);
          }
        }
        return methods.sort()
      }
}
})()



// fi.map([1, 2, 3], function(num){ return num * 3; });
// fi.map({one: 1, two: 2, three: 3}, function(num, key){ return num * 3; });
// fi.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
 // fi.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
// console.log(fi.reduce([5, 5, 5], function(memo, num){ return memo + num; }, 4));
// console.log(fi.sortBy([1, 2, 3, 4, 5, 6], function(num){ return Math.sin(num)}));
// var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
// fi.sortBy(stooges, 'name');
// console.log(fi.first([1,2],0));
// console.log(fi.last([5, 4, 3, 2]));
// console.log(fi.uniq([1, 2, 3, 4, 4, 5]));
// console.log(fi.keys({one: 1, two: 2, three: 3}));
// console.log(fi.values({one: 1, two: 2, three: 3}));

console.log(fi.functions(fi));

// console.log(fi.size({one: 1, two: 2, three: 3}));
// console.log(fi.compact([0, 1, false, 2, '', 3]));
