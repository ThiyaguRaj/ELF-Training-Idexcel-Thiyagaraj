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
function removeFunc(ele)
{
    ele.remove();
}

//2nd
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
    para.style.display="none";
    return true;
    }
}
function deleteEndEle()
{
    app2.removeChild(app2.lastElementChild);
}
function removeSecond(elem)
{
elem.remove();
}