var values = [1,3,5];
/*
- prev = 0 next = 1
- prev = 1 next = 3
- prev = 4 next = 5 

 */

var total = values.reduce(function(prev,next){
    return prev + next;
}, 0)

console.log(total);

/* - prev  = [], next = [1,2.3] */
/* - prev  = [1,2.3], next = [4,5,6] */


var values = [[1,2,3, [4,5,6]]]


/* - prev  = [], next = [1,2.3] */
/* - prev  = [1,2.3], next = [4,5,6] */


var flattedArray = values.reduce(function(prev,next){
    return prev.concat(next)
}, [])

console.log(flattedArray);