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