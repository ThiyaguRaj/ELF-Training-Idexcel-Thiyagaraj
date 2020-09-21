document.signin.addEventListener("submit", validate, false);
function validate(e) {
    var form = document.signin;
    var inpVal = form.inval.value;
    var password = form.passval.value;
    var emailExp = new RegExp("[a-zA-Z0-9]+@+gmail.com");
    var phoneExp = new RegExp('^[0-9]{10}$');
    var passwordExp = new RegExp('^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$');
    if (emailExp.test(inpVal) || phoneExp.test(inpVal)) {
        if (passwordExp.test(password)) {
            // var msgSuccess = document.getElementById('sucsMsg');
            // msgSuccess.innerText = "successsssssssssssssssss";
            // msgSuccess.style.display = "block";
            // msgSuccess.style.color = "red";
            // msgSuccess.style.fontSize = "large";
            // document.body.append(msgSuccess);
            let sucss = document.createElement('p');
            sucss.innerText = "Login Successfull";
            document.body.append(sucss);
            form.submit();
            e.returnValue = true;
        }

        else {
            alert("Wrong Password");
            form.passval.focus();
            // return false;
            e.returnValue = false;
        }
        // return false;
        e.returnValue = false;
    }
    else {
        alert("Provide Proper Email Or Mobile Number");
        form.inval.focus();
        // return false;
        e.returnValue = false;
    }
    // return false;
    e.returnValue = false;

}

document.signup.addEventListener("submit",validateSign,false)
function validateSign(a) {
    var formSignVal = document.signup;
    var surNameCheck = /[a-zA-Z]{0,30}/.test(formSignVal.surName.value);
    var firstNameCheck = /[a-zA-Z]{0,5}/.test(formSignVal.firstName.value);
    var emailCheck = (/^[0-9]{10}$/.test(formSignVal.mailOrPhone.value)) || (/[a-zA-Z0-9]+@+gmail.com/.test(formSignVal.mailOrPhone.value));
    var passwordCheck = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(formSignVal.password.value);
    var dateCheck = (formSignVal.birthday.value) !== "";
    var genderCheck = () => {
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
        msgSuccess.innerText = "successsssssssssssssssss";
        msgSuccess.style.display = "block";
        msgSuccess.style.color = "red";
        var objStore = {
            fName: document.getElementById('fn').value,
            secName: document.getElementById('ln').value,
            mailOrMob: document.getElementById('em').value,
            passwrd: document.getElementById('ps').value
        }
        var converted = JSON.stringify(objStore);
        var locStore = localStorage.setItem("user", converted);
        // var sesStore = sessionStorage.setItem("current", converted);
        // formSignVal.submit();
        a.returnValue=flase;
    }
    else if (!firstNameCheck) {
        alert('provide proper FIRSTNAME');
        formSignVal.firstName.focus();
        a.returnValue=false;
    }
    else if (!surNameCheck) {
        alert('provide proper SURNAME');
        formSignVal.surName.focus();
        a.returnValue=false;
    }
    else if (!emailCheck) {
        alert('provide proper EMAIL or MOBILE NUMBER');
        formSignVal.mailOrPhone.focus();
        a.returnValue=false;
    }
    else if (!passwordCheck) {
        alert('provide proper PASSWORD');
        formSignVal.password.focus();
        a.returnValue=false;
    }
    else if (!dateCheck) {
        alert('Date Cannot Be empty');
        a.returnValue=false;
    }
    else if (!genderCheck()) {
        alert('Select a gender');
        a.returnValue=false;
    }
    a.returnValue=false;
}