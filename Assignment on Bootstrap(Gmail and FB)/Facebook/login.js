function validate() {
    var form = document.signin;
    var inpVal = form.inval.value;
    var password = form.passval.value;
    var emailExp = new RegExp("^.+@.+\..+$");
    var phoneExp = new RegExp('^[0-9]{10}$');
    var passwordExp = new RegExp('^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$');
    if (emailExp.test(inpVal) || phoneExp.test(inpVal)) {
        if (passwordExp.test(password)) 
        {
            var msgSuccess = document.getElementById('sucsMsg');
            msgSuccess.innerText="successsssssssssssssssss";
            msgSuccess.style.display="block";
            msgSuccess.style.color="red";
            msgSuccess.style.fontSize="large";
            form.submit();
        }

        else
        {
            alert("Wrong Password");
            form.passval.focus();
        }
    }
    else
    {
        alert("Provide Proper Email Or Mobile Number");
        form.inval.focus();

    }
    

}


function validateSign() {
    var formSignVal = document.signup;
    var surNameCheck = /[a-zA-Z]{0,30}/.test(formSignVal.surName.value);
    var firstNameCheck = /[a-zA-Z]{0,5}/.test(formSignVal.firstName.value);
    var emailCheck = (/^[0-9]{10}$/.test(formSignVal.mailOrPhone.value)) || (/^.+@.+\..+$/.test(formSignVal.mailOrPhone.value));
    var passwordCheck = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(formSignVal.password.value);
    var dateCheck = (formSignVal.birthday.value) !== "";
    var genderCheck = ()=> {
        var genders = formSignVal.gender;
        for (var i = 0; i < genders.length; i++) {
            if (genders[i].checked == true) {
                return true;

            }
        }
        return false;
    };

    if (firstNameCheck && surNameCheck && emailCheck && passwordCheck && dateCheck && genderCheck()) {
        var msgSuccess = document.getElementById('sucsMsg');
            msgSuccess.innerText="successsssssssssssssssss";
            msgSuccess.style.display="block";
            msgSuccess.style.color="red";
        formSignVal.submit();
    }
    else if (!firstNameCheck) {
        alert('provide proper FIRSTNAME');
        formSignVal.firstName.focus();
    }
    else if (!surNameCheck) {
        alert('provide proper SURNAME');
        formSignVal.surName.focus();
    }
    else if (!emailCheck) {
        alert('provide proper EMAIL or MOBILE NUMBER');
        formSignVal.mailOrPhone.focus();
    }
    else if (!passwordCheck) {
        alert('provide proper PASSWORD');
        formSignVal.password.focus();
    }
    else if (!dateCheck) {
        alert('Date Cannot Be empty');
    }
    else if (!genderCheck()) {
        alert('Select a gender');
    }
}