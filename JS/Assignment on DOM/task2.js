var val;
var count=0;
function createItem()
{
    
    if(count==0)
    {
        val=document.createElement("p");
        val.innerHTML="hai hai hai";
        document.body.appendChild(val);
        val.style.display="none";
        count++;
    }
    else
    {

    }
}
function showItem()
{
    val.style.display="block";
}
function deleteItem()
{
    val.style.display="none";
}