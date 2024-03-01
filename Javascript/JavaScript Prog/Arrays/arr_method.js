let fruits=["mango","banana","papaya","lichi"];

//add one or more items
fruits.push("apple","grapes");
console.log(fruits);

//delete one item
fruits.pop();
console.log(fruits);

//convert to string
console.log(fruits.toString());

///////////////

marks=[5,6,4,5,3,3];
console.log(marks.toString());

//concat
let marvel_heroes=["thorr","spiderman","iron main","captain america"];
let dc_heroes=["superman","batman"];
let indian_heroes=["shaktiman","rajnikant"];

let heroes=marvel_heroes.concat(dc_heroes,indian_heroes);
console.log(heroes);

//unshift() -- adds in  starting of the array:
marvel_heroes.unshift("antman");
console.log(marvel_heroes);

//shift()-- deletes from starting and return
marvel_heroes.shift();
console.log(marvel_heroes);

//slice()- returns a piece of the array.
console.log(heroes);
console.log(heroes.slice(3,6));
console.log(heroes.slice());

//splice() - change original array (add,remove,replace).
//splice(start_ind,del_count,new_element)
heroes.splice(2,3,"aryan","anime");
console.log(heroes);

//add element
heroes.splice(3,0,"salu bhai");
console.log(heroes);

//del element
heroes.splice(3,1);
console.log(heroes);

//will delete all the elements after 4 th index--
heroes.splice(4);
console.log(heroes);
