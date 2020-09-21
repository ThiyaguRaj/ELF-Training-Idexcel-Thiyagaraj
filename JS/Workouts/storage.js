// class StoreData{
//     constructor(firstName,surName,age,mailId){
//             this.firstName = firstName;
//             this.surName = surName;
//             this.age = age;
//             this.mailId = mailId;
//     }
// }

// document.formSign.addEventListener("submit",signFunc,false);
function signFunc(){
    var a = document.getElementById('fName').value;
    var b = document.getElementById('mail').value;
    var c = document.getElementById('pWord').value;
    console.log(a+" "+b+" "+c);
    
    let signObj = {
        firstName : a,
        mailId : b,
        password : c
    }
    console.log(signObj);
    // console.log(typeof(signObj));
    // a.returnValue = false;
    let keyMail = b+"";
    console.log(typeof(JSON.stringify(signObj)));
    let signObjStore = localStorage.setItem(keyMail,JSON.stringify(signObj));
    console.log(signObjStore);
    // document.formSign.submit();
    // a.returnValue = false;
    document.formSign.submit();
    return true;
}