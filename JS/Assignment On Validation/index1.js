//Event Listeners:
var addEvent1=document.getElementById('add');
addEvent1.addEventListener('click', createNew);
var dltEvent1=document.getElementById('dlt');
dltEvent1.addEventListener("click", deleteEnd);

var app=document.getElementById('list1');
function createNew()
{
    var inpVal=document.getElementById('input1').value;
    var para=document.getElementById('error');

    if(inpVal.length<=0)
    {
        para.style.display="block";
        para.style.color="red";
        return false;
    }
    else{
    var val=document.createElement('li');
    val.innerText=inpVal;
    val.innerText=val.innerText.toUpperCase();
    val.setAttribute("onclick","removeFunc(this)");
    app.appendChild(val);
    para.style.display="none";
    // app.insertBefore(val, app.firstElementChild);
    return true;
    }
}

function deleteEnd()
{
    app.removeChild(app.lastElementChild);
    
}
var removeVar=document.getElementsByTagName('li');
for(var i=0;i<removeVar.length;i++){
    removeVar[i].addEventListener('click',function(){
        removeFunc(this);
    });
}
function removeFunc(res)
{
    res.remove();
}



//2nd
var addEvent2=document.getElementById('add1');
addEvent2.addEventListener('click', createNewEle);
var dltEvent2=document.getElementById('dlt1');
dltEvent2.addEventListener("click", deleteEndEle);

// var addList=document.getElementsByClassName('abc');
// addList.addEventListener('click', removeFunc);

var app2=document.getElementById('list2');
function createNewEle()
{
    var inpVal=document.getElementById('input2').value;
    var para=document.getElementById('error1');

    if(inpVal.length<=0)
    {
        para.style.display="block";
        para.style.color="red";
        return false;
    }
    else{
    var val=document.createElement('li');
    val.innerText=inpVal;    
    app2.appendChild(val);
    val.innerText=val.innerText.toUpperCase();
    val.setAttribute("onclick","removeSecond(this)")
    para.style.display="none";
    return true;
    }
}
function deleteEndEle()
{
    app2.removeChild(app2.lastElementChild);
}


var removeVar1=document.getElementsByTagName('li');
for(var i=0;i<removeVar1.length;i++){
    removeVar1[i].addEventListener('click',function(){
        removeSecond(this);
    });
}
function removeSecond(elem)
{
elem.remove();
}