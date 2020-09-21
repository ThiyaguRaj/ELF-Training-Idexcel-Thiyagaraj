// QuerySelector()

// var hello=document.querySelector('h1');
// hello.textContent="Hello World,,,,,,,,,,,,,,,,,,,";

// let name='queen'
// console.log(name);


// let arr=[0,1,2,'dudn','jndnd'];
// console.log(arr);
// console.log(arr.join(``));

//join()
// console.log(typeof(arr.join(``)));

// splice()
// console.log(arr);
// console.log(arr.splice(1,3,'dhndhb'));
// console.log(arr);console.log(arr);console.log(arr);console.log(arr);

// forEach()
// arr.forEach(function(value,index)
// {
//     console.log(`Index of ${value} is ${index}`);
    
// })

//filter()
// let arr1=arr.filter(function(value,index)
// {
//     if(value<=3)
//     {
//         return true;
//     }
//     else{
//         return false;
//     }
// })
// console.log(arr1);

// for(let vari in arr)
// {
//     console.log(vari);
    
// }

// var x= document.createElement("h1")
// x.innerHTML="Good Morning";
// // document.body.appendChild(x);
// document.body.insertBefore(x, document.body.childNodes[0]);

// Query Selector:
// function selectFunc()
// {
//     var y=document.querySelector("ab");
//     y.style.backgroundColor="gray";
//     y.style.color="red";
// }

// var x=document.getElementsByName('tm');
// console.log(x);

// var a=document.createElement('p')
// a.innerHTML="He is asking about you"
// document.body.appendChild(a)
// document.write("Hai All How Are you")

// var num=5;
// console.log(num.toString(2));

// var arr=[10,20,9,1,30,2,40];
// console.log(Math.min(...arr));

// var num=1234;
// var str=num.toString();
// var arr=str.split('');
// console.log(arr);
// var n1=7;
// var n2=12;
// console.log(n1.toString(2));
// console.log(n2.toString(2));
// var bin=n1.toString(2) || n2.toString(2);
// console.log(bin);
// console.log(paseInt(bin,2).toString(10));

// console.log(parseInt(n1.toString(2) && n2.toString(2),2).toString(10));

// var num=12389;
// console.log(num.toString().split('').reverse().join(''));

// var a='cacCbc';
// var b='c';
// var arr=a.split('');
// var count=0;
// for(var res of arr)
// {
//     if(res==b)
//     {
//         count++
//     }
// }
// console.log(count);


// function createNew()
// {
//     var x=document.createElement('li');
// x.innerText="abcdef";
// document.body.appendChild(x);
// }
// function validate()
// {
// var form=document.forms['MyForm'];
// var use=form['user'];
// console.log(use.value.length);
// var para = document.getElementById('err');
// if(use.value.length<=5)
// {
    
//     para.style.display="block";
//     return false;
// }
// else{
//     console.log('satisfies');  
//     para.style.display="none";
//     use.value.clear();
//     console.log();
    
//     return true;
// }
// return false;
// }

// var x=document.getElementById('ab');
// x.addEventListener('mouseover',mouseOver);

// function mouseOver()
// {
//     x.innerHTML="hae";
// }

// var x=document.getElementsByClassName('ab');
// var y= document.getElementById('aa');
// var x=document.getElementById('aa').addEventListener('click',function(){
//     clickDlt(this);
// })

// function clickDlt(ele)
// {
//     ele.remove();
// }

// var arr=[];
// arr[0]=10;
// arr[1]='raj';
// arr[2]=null;
// arr[3]='abc';
// arr[4]=20;
// arr[5]=50;
// console.log(arr);
// var str=arr.join('');
// console.log(str);
// console.log(arr.splice(2,3,"deleted"));
// console.log("main array is"+arr);
// console.log(arr[4]);
//slice
// var arr1=arr.slice(1,6)
// console.log("subset is"+arr1);
// arr1.forEach((value,index) => {
//     console.log(value+" its index is "+index);
// });

// var filtered=arr.filter(function(val,index){
//     if(typeof(val)=="number")
//     {
//         return true;
//     }
//     else{
//         return false;
//     }
// });
// console.log(filtered);
// console.log(arr);

// function validateFun()
// {
//     var form=document.main;
//     var val=form['mobnum'];
//     console.log(val.value);
//     var exp=new RegExp("[0-9]");
//     var res=exp.test(val.value);
    
//     if(res)
//     {
//         form.submit();
//         return true;
//     }
//     else{
//         var par=document.getElementById('err');
//         par.innerText="Input a number";
//         var foc=document.getElementById("mobnum");
//         foc.focus();
//         return false;
//     }
//     return true;   

// }

class Sub{
    constructor(a){
        this.a=a;  
    function sum() {
        return 22;
    }
}
}
let obj = new Sub(12);
obj.sum();
console.log("kdehufrheuf");