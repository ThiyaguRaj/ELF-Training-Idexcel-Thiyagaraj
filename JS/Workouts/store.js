
document.main.addEventListener("submit",validateFunc)
function validateFunc(a)
{
    let mailVal=document.getElementById('inpMail');
    let passVal=document.getElementById('inpPass');
    if(mailVal.value && passVal.value)
    {
    let storeVal=sessionStorage.setItem(mailVal.value,passVal.value);
    console.log(storeVal);
    // a.returnValue=true;
    }
    else{
        alert("input value1");
        mailVal.focus();
        a.returnValue=false;
    }
    a.returnValue=false;
}
document.signForm.addEventListener("submit",validateSignIn);
function validateSignIn(a)
{
    let fstName=document.getElementById('fname').value;
    let surName=document.getElementById('fname').value;
    let emailVal=document.getElementById('fname').value;
    let pwdVal=document.getElementById('fname').value;
    let dateVal=document.getElementById('signDate').value;
    if(fstName && surName && emailVal && pwdVal && dateVal)
    {
        let locObj={
            firstName : fstName,
            surName : surName,
            mailId : emailVal,
            mailPwd : pwdVal,
            dob : dateVal
        }
        let strConverted=JSON.stringify(locObj);
        for(let i=0;i<=100;i++)
        {
        let locStore=sessionStorage.setItem(`custom ${i}`,strConverted);
        i=i+100;
        }
        // document.signForm.submit();
        a.returnValue=true;
    }
    else{
        alert("wrong info's");
        fname.focus();
        a.returnValue=false;
    }
    a.returnValue=false;
}