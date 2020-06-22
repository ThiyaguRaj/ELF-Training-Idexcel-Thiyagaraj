//ES6 Arrow Function
    //function to retrive nth element of an array
    var arr1=[1,2,3,4,5];
    var element=(n)=>{
        console.log(`${n} th element of Array is : `+arr1[n-1]);
    }
    element(5);

//Named Functions

function modulo(a,b){
    var res=a%b;
    console.log(`Modulo value of ${a} and ${b} by using named function is : `+res);    
}
modulo(10,4)

//Function Expression

var square=function(x,y){
    var res=(x+y)*(x+y);
    console.log(`Square of (x+y) with x as ${x} and y as ${y} using function expression is : `,res);
    }
    square(8,2);

//Immediately Invoke Function Expression

(function(p,q){
    var res=((p*p)+(q*q));
    console.log(`p^2 + q^2 with p as ${p} and q as ${q} using IIFE is : `,res);
    
})(8,2);

//Named Functions

var emp={
    name : 'tyagu',
    age : 23
}
var emp1={
    name : 'Suji',
    age : 23
}
function onlyName(obj){
    console.log(`Name of employee is : `,obj.name);
}
onlyName(emp1);