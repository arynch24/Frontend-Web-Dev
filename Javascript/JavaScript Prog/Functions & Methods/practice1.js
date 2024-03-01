function count_vowels(str)
{
    let vowel=['a','e','i','o','u'];
    let count=0;
    for (let i=0;i<vowel.length;i++)
    {
        for(let j=0;j<str.length;j++)
        {
            if(vowel[i]==str[j])
            {
                count++;
            }
        }
    }
    console.log(count);

}
