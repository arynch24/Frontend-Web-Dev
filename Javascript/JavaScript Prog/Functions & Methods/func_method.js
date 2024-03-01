//ex
//touppercase()  -- is a function but
//"string".touppercase() -- is a method 
//methods are function only but its attached with an object or a data structure. 


//arr.forEach(call back function) method
//a callback is a function passed as an argument to another function


//*****forEach function is higher order function/method */
//a function whose parameter is another function or return another function as their output.


//forEach is used for normal calc or print

let arr=[1,2,4,5,3,6];

arr.forEach(function printval(val)
{
    console.log(val);
});


//or

arr.forEach((val)=>
{
    console.log(val);
});

//ex
let array1=["up","mp","ka","gj","mh"];
array1.forEach((val, idx,array1) => 
{
    console.log(val.toUpperCase(), idx,array1);
})



//map is used to create a new array using values.
//map array method
//arr.map(callbackfunc(value,index, array))

//or

//let newarr=arr.map((val)=>{
//    return val*2;});

let nums=[34,46,64];

let newarr=nums.map((val)=>{
    return val*2;
});
console.log(newarr);


//filter
//creates a ne array of elements that give true for a condition/filter.
//Eg. all even Elements

let evenArr=arr.filter((val)=>{
    return val%2===0;//condition
})
console.log(evenArr);


//reduce method
//performs some operations & reduces the array to a single value. It returns that single value.
let number =[1,2,3,4,5];//1 is result & 2 is current value.

const output=number.reduce((result,current)=>{
    return result+current;
})


console.log(output);


//

let max_number=[32,74,52,35,23,67,92];
const max=max_number.reduce((pre,curr)=>
{
    return pre>curr?pre:curr;
})
console.log(max);




















