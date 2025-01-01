let array =[1,2,3,4,5,6,7,8,9,10]
console.log(array);
// Use filter to find even numbers
let evenNumbers = array.filter(num => num % 2 === 0);
console.log(evenNumbers); 
 let array2 =[12,13,14,15,16,17,18]
 // square using map
 let square = array2.map(array2=>array2**2)
 console.log(square)
 //splice 
 array.splice(2,1)
 console.log(array);
 // concatination 
  let combined =array.concat(array2)
 console.log(combined);
 console.log( array.includes(2));// return true 
   array.push(11)
   array.push(44)
   array.push(99)
   console.log(array);
//pop last element
array.pop()
console.log(array);
// remove ist element
array.shift()
console.log(array);
let newarr =[]
newarr.push(100)
console.log(newarr);
console.log(newarr.length);
let fianlarr = []
fianlarr.push(33,44)
fianlarr.pop()
console.log(fianlarr)
//objects
let obj ={
   key11:"asmmaa",
   key12:144,
   key13:221};
let obj2={
    key1:"name ",
    key2:22,
    key3:144};
let object= Object.assign({},obj,obj2)
console.log(object);
// console.log(combinedobj);
 Object.freeze(obj)
 console.log(Object.hasOwnProperty(obj))// return true or false
 console.log(Object.entries(obj2));