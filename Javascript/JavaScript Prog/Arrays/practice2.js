let price=[250,645,300,900,50];
for(let i=0;i<price.length;i++)
{
    console.log(`Price of index ${i}:`,price[i]);
    price[i]=0.9*price[i];
    console.log(`Price after discount of index ${i}:`,price[i]);
}
