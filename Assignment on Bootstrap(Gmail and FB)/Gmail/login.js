function validateData()
{
    var form=document.MyForm;
    var inpVal=form['userVal'].value;
    // var expEmail=new RegExp("^.+@.+\..+$");
    var exp1=new RegExp("[a-zA-Z0-9]+@+gmail.com");
    var exp2=new RegExp('^[0-9]{10}$');
    if(exp1.test(inpVal) || exp2.test(inpVal))
    {
        form.submit();
    }
    else{
        alert("Invalid Email or Mobile number");
        form['userVal'].focus();
    }
}