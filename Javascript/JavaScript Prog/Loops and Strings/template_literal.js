let obj={
    naam :"Aryan",
    umra:19,
};
//template literal

//syntax
//this is known as (((((((((####  string interpolation  ###))))))))
//  `string text ${expression} string text anything`

//obj.umra will be cionsidered as string.
let output=`My name is ${obj.naam} and I am ${obj.umra} years old.`;
console.log(output);

//normal string 
//obj.umra will be cionsidered as number.
console.log("My name is",obj.naam,"and I am",obj.umra, "years old.")//template literal 


//eg.
let sentence =  `I am pro coder. \nIQ POWER = ${(2**6+6*6)*2-30}`;
console.log(sentence);

//   /t - for tab space
let kuchbhi =`I am noob at-\tmaths`;//  \t is counted as  1 character
console.log(kuchbhi.length);