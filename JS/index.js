var a=1000,b=2000,c=3000;
console.log(c);
// if(a>c || b>c)
// {
//    if(a>b)
//    {
//        console.log('a is greater');
//    }
//    else{
//      console.log('b is greater');
//    }
// }
// else{
//     console.log('c is greater');
// }
var res=(a>c || b>c)?((a>b)?"a is greater":"b is greater"):"c is greater";
console.log(`result is : ${res} : so that is`);
