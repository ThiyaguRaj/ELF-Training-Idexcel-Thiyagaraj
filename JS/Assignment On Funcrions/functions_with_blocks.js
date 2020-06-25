//Immediately Invoke Function Expression

(function (score) {
    switch (score) {
        case 0: console.log("DOT BALL"); 
        break;
        case 1: console.log("SINGLE"); 
        break;
        case 4: console.log("BOUNDARY"); 
        break;
        case 6: console.log("MAXIMUM"); 
        break;
        default: console.log("WICKET"); 
        break;
    }
})(3);

//ES6 Arrow Function
//function to retrive nth element of an array
var element = (name) => {
    if (name == "Dhoni") {
        console.log(`${name} is the Captain Of Chennai Super Kings`);
    }
}
element('Dhoni');

//Named Functions
var player1 = {
    name: 'Dhawan',
    avg: 48
}
var player2 = {
    name: 'Rohit',
    avg: 47
}
function best() {
    if (player1.avg > player2.avg) {
        console.log(`${player1.name} is the best Indian Opener`);
   }
    else {
        console.log(`${player2.name} is the best Indian Opener`);
    }
}
best();

//Function Expression

var cup = function (csk, mi) {
    if (csk > mi) {
        console.log(`Number of cups won by CSK is ${csk} . So, Its a better team than others`);
    }
    else if (csk == mi) {
        console.log(`Both Teams are Equal`);
    }
    else {
        console.log(`Number of cups won by MI is ${mi} . So, Its a better team than others`);
    }
}
cup(3, 4);

//Named Functions

function favShot(name)
{
    switch (name) {
        case 'Dhawan': console.log("COVER DRIVE");
        break;
        case 'Dhoni': console.log("HELICOPTER");
        break;
        case 'Kohli': console.log("COVER DRIVE");
        break;
        case 'Rohit': console.log("LOFTED PULL");
        break;
        default: console.log("No Name Specified OR No special shots");        
        break;
    }
}
favShot('Dhoni');