let arr=["ka","kha","gaa","gha","anga","cha","chaa"];
// console.log(arr[0]);

// console.log(arr[arr.length-2]);



// arr.push("ja");
// arr.push("jha");
// arr.push("iya");

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// let b=arr.pop();

// console.log(b);

// arr[4]="invincible";
// console.log(arr);

let marks=[45,24,32,67,86,95];

let sum=0;
let min=10000000;

for(let i=0;i<marks.length;i++){
    sum+=marks[i];
    if(marks[i]<min){
        min=marks[i];
    }
}

console.log(sum/marks.length);
console.log(min);

delete marks[3];
console.log(marks);

marks.shift();
console.log(marks);
marks.unshift(45);

console.log(marks);
marks.splice(3,2);
console.log(marks);

console.log(marks.toString());


let combine= marks.concat(arr);

console.log(combine);

console.log(marks.indexOf(32));
console.log(marks.lastIndexOf(32));

let str = arr.join('   ');
console.log(str);

let ab=arr.slice(2,5);

console.log(ab);

marks.forEach(ele=>{
    ele*=2;
    console.log(ele)});


let m=marks.map(ele=>{
    return ele*=2;
})
console.log(m);





