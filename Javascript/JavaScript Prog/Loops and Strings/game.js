//praactice
let num=prompt("Guess the game number");
while(num!=25)
{
    num=prompt("You enter wrong number. Try again!");
}
if(num==25)
{
    console.log("You won the game.");
}