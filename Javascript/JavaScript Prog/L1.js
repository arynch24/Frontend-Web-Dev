let name ="Aryan Chauhan";
let rollNo=2301010025

//its recommended to do namkarad in this way
//isTrue // name //not Name

//console is used for priting
console.log(name)
console.log(rollNo)

// variable - let and const
//let - Variable cannot be re-declared but can be updated. 
let a=10;
a=20;

//in const varianble can't be redeclared or updated.
//error
const b=35;
//b=89;

//a block scope variable both let and const
{
    let c=35;
    console.log(c);
}

//object code
const student ={
    name: "Aryan Chauhan",
    rollno:2301010025
}

//this line will show error.

// student={
//     key:"value"
// }



//we can change the keys and values of const object code.
//but memory remains same it doesnt changes.
// to cahnge it whole object code needs to be changed which will show error becausse of const.
//new key:value
student["namkarad"]="ULLU KA PATHA";
console.log(student)

//typeof is used in console to see type.



//practice 1
const product={
    title:"Parket Jotter Standard CT Ball Pen (Black)",
    rating:7002,
    offer:5,
    price:270
}

console.log(product)

//practice 2
const profile={
    username:"its_me_aryan",
    followers:700,
    isFollow:true,
    bio:"I am coder"
}

console.log(profile)

console.log(typeof profile["isFollow"])