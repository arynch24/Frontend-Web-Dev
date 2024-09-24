// let arr=[1,2,3,4,5,6,7,8,9,10];

// const a = arr.map((value)=>{
//     return value*value;
// });

// //or can simply write 

// const b = arr.map(value=>value*value);


// console.log(a);
// console.log(b);


// let freinds =[
//     {Name:"Manjeet",Rating:4},
//     {Name:"Ashutosh",Rating:5},
//     {Name:"Alok",Rating:4},
// ];

// const dostKeNaam= freinds.map(value=>value.Name);

// console.log(dostKeNaam);


// let aank=[1,'do','tin',4,5,'che',7,'aath'];

// // const number= aank.filter((value)=>{
// //     return typeof(value) =='string';
// // });

// //or 

// const number= aank.filter(value=> typeof(value) =='string');

// console.log(number);



// const products = [
//     {
//         id: 1,name: "Product A",price: 10
//     },
//     {
//         id: 2,name: "Product B",price: 20
//     },
//     {
//         id: 3,name: "Product C",price: 30
//     },
// ];

// const expensiveProducts = products.filter((product) => product.price > 15);

// console.log(expensiveProducts);

// const numbers = [1, 2, 3, 4, 5];

// const multiple = numbers.reduce((acc, curr) => {
//     return acc * curr;
// }, 1);

// console.log(multiple);
// // Output: 120

// const numbers = [1100, 25, 3, 4, 5];

// numbers.sort();
// console.log(numbers);


// const numbers = [1, 25, 11, 3, 11, 4, 5];

// let sum=0;
// numbers.forEach(value=>sum+=value);

// console.log(sum); //60



// const family=['Matashri','Pitashri','anuj','jyestha'];

// family.forEach((value,index)=> console.log(`${index} I love ${value}`));

// const numbers = [1, 2, 3, 4, 5, 6];

// let multiple = 1;

// for (let value of numbers) {
//     multiple *= value;
// }

// console.log(multiple); //720

const person = {
    name: 'Mayank',
    age: 21,
    city: 'Delhi'
  };
  
  for (const key in person) {
    console.log(key + ": " + person[key])
  }
  
  /* Output :
  name: Mayank
  age: 21
  city: Delhi
  */