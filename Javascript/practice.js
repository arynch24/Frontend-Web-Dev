// const play =()=>console.log("I am playing");

// const play2=function(){
//     console.log("I love playing")
// }

// play();


// const obj={
//     name:"Aryan",
//     age:"24",
//     introduce:function(){
//         console.log(`My name is ${this.name}`);
//     }
// }

// obj.introduce();

// obj.say = function(){
//     console.log(`Mera Age ${this.age}`);
// }

// obj.say();

// const freinds = [() => (console.log("Mera name Aryan hai")), () => (console.log("Mai 20 saal ka hu."))];

// freinds[0]();
// freinds[1]();



//higher order function
function coffee(addSugar){
    // addSugar();
    setTimeout(addSugar,3000)
    return function(){
        console.log("coffee is ready. !! Enjoy ");
    }
}

const makeCoffee=coffee(addSugar);

makeCoffee();

//callback function
function addSugar(){
    console.log("Sugar added to coffee");
}

