
// //for of loop 
// let str="Coder";
// let x=0;
// for(let i of str)
// {
//     console.log("i=",i);
// x++;
// }
// console.string("string size:",x);

//for in loop
const product={
    title:"Parket Jotter Standard CT Ball Pen (Black)",
    rating:7002,
    offer:5,
    price:270
}

//[in] in object code case
for(let key in product)
{
    console.log("key:",key," value:",product[key]);
}
