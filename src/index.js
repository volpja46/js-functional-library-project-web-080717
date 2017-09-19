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
          debugger

          return element
        }
      }
    },

  }
})()


// fi.map([1, 2, 3], function(num){ return num * 3; });
// fi.map({one: 1, two: 2, three: 3}, function(num, key){ return num * 3; });
fi.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
fi.reduce([1, 2, 3], function(total, amount){ return total + amount; }, 0);
