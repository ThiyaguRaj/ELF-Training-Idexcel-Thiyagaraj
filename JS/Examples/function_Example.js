// Named Function

function display(name)
{
    console.log("name is",name);
    return 2;
}
console.log(display(`Roman`));

// Function Expression:

var add= function(a,b){
    return a+b;
}
console.log(add(1,10));

// IIFE - Immediately Invoke Function Expression

(function(aa)
{
    console.log(aa);
})("abcd")

// ES6 Arrow Function:

var dest=(a)=>{
    console.log("value is : ",a);
}
dest(100000000)

//Function as parameter:

function add()
		{
			console.log("inside func");
		}
		function outer(a,b,func)
		{
			console.log("calling func",a,b);
			func()
		}

		outer(1,2,add())
        