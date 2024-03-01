let marks=[43,35,90,77,45,97,99,98,45,93];
const marks_90=marks.filter((val)=>//callback function
{
    return val>=90;//filter have true/false as a value; return only true values
})
console.log(marks_90);