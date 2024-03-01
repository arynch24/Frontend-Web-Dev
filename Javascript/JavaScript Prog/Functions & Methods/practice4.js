let n= prompt("Enter a number");
let arr=[];
for(let i=1;i<=n;i++)
{
    arr.push(i);
}
let add=arr.reduce((result,current)=>
{
    return result+current;
})
let pro=arr.reduce((result,current)=>
{
    return result*current;
})

console.log(add);
console.log(pro);