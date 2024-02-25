//these are built in functions to maipulate a string.
let string="aryan chauhan";
let new_str=string.toUpperCase();
string=string.toUpperCase();

console.log(new_str);
console.log(string);

// strings are immutable in javascript.
//to change it you need to create new string

let me="          I am Web Developer and Web Expert      ";
//remove all spacess from left and right
console.log(me.trim());

//return part of string
console.log(string.slice(4,7));

//joins two strings
console.log(string.concat(me));
console.log(string+" mai noobb hu   "+me);
//number is converted into string. than added.
console.log("hello"+7777);



//str.replace(searchvalue, new value)
console.log(me.replace("Web","App"));
console.log(me.replaceAll("Web","App"));

//str.charAt(index);
 console.log(me.charAt(17));
 console.log(me[17]);