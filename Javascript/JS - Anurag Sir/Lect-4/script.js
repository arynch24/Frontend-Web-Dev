// const name = ["noob","nooobie","pro","prooooo"];
// let[name1,name2,name3,name4]=name;
// console.log(name1,name2,name3,name4);



// const name = [["noob","nooobie"],["pro","prooooo"]];
// let[name1,name2]=name;
// console.log(name1,name2);


// const name = ["noob","nooobie","pro","prooooo"];
// let[name1,name2, ,name4]=name;
// console.log(name1,name2,name4);


// let obj={kilo:1,weight:50,length:15}

// let {kilo, weight, length}=obj;

//Answer to find 
//(...args)  //rest or spread

//harsh(...arghs) //rest or spread

// const names=[1,2,3,4,5,6,7,8,9];
// let[num1,num2, ...args]=names;

// console.log(args);

const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]

let [e, pi, gravity, humanBodyTemp, waterBoilingTemp]=constants;
console.log(gravity);
let[fin, est, sw, den, nor]=countries;

let{width,height,area,perimeter}=rectangle;
console.log(area);

