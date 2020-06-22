       // Chapters 31-34

/* Task 1

var date = new Date();

document.write(date);

*/

/* Task 2

var date = new Date();

x = date.getMonth();

switch(x)
{
    case 0:
        alert("Current Month: January");
        break;
    case 1:
        alert("Current Month: February");
        break;
    case 2:
        alert("Current Month: March");
        break;
    case 3:
        alert("Current Month: April");
        break;
    case 4:
        alert("Current Month: May");
        break;
    case 5:
        alert("Current Month: June");
        break;
    case 6:
        alert("Current Month: July");
        break;
    case 7:
        alert("Current Month: August");
        break;
    case 8:
        alert("Current Month: September");
        break;
    case 9:
        alert("Current Month: October");
        break;
    case 10:
        alert("Current Month: November");
        break;
    case 11:
        alert("Current Month: December");
        break;    
    default:
        alert("Incorrect Result");
}

*/

/* Task 3

var date = new Date();

x = date.getDay();

switch(x)
{
    case 0:
        alert("Today is: Sunday");
        break;
    case 1:
        alert("Today is: Monday");
        break;
    case 2:
        alert("Today is: Tuesday");
        break;
    case 3:
        alert("Today is: Wednesday");
        break;
    case 4:
        alert("Today is: Thursday");
        break;
    case 5:
        alert("Today is: Friday");
        break;
    case 6:
        alert("Today is: Saturday");
        break;
    default:
        alert("Incorrect result");

}

*/

/* Task 4

var date = new Date();

x = date.getDay();

switch(x)
{
    case 0:
        alert("It's Fun day");
        break;
    case 6:
        alert("It's Fun day");
        break;
    default:
        alert("Today is not Saturday or Sunday");

}

*/

/* Task 5

var x = new Date();
var y = x.getDate();

if(y<16)
{
    document.write("First fifteen days of the month");
}
else{
    document.write("Last days of the month");
}

*/

/* Tasks 6

var date = new Date();

document.write("Current Date: "+date+"<br>");
document.write("Elapased milliseconds since January 1, 1970: "+date.getTime()+"<br>");
document.write("Elapased minutes since January 1, 1970: "+(date.getTime()/(1000*60))+"<br>");

*/

/* Task 7

var date = new Date();

x = date.getHours();

if(x<12)
{
    document.write("Its A.M");
}
else{
    document.write("It's P.M");
}

*/

/* Task 8

var laterDate = new Date("Dec 31, 2020");

document.write(laterDate);

*/

/* Task 10

var refDate = new Date("2015");

var currDate = new Date();

var diff = currDate.getTime()-refDate.getTime();

var sec = diff/1000;

document.write("On reference date: "+currDate+"<br>");
document.write(sec+" have passed since beginning of 2015");

*/

/* Task 11

var x = new Date();
var y = new Date();
var z = x.getHours()-1;
y.setHours(z);

document.write("Current Date: "+x+"<br>");
document.write("1 hour ago, it was: "+y);

*/

/* Task 12

var x = new Date();
var y = new Date();
var z = x.getFullYear()-100;
y.setFullYear(z);

document.write("Current Date: "+x+"<br>");
document.write("100 years back, it was: "+y);

*/

/* Task 13

var input = prompt("Enter your birth date: ");
var currentDate = new Date();
var birthDate = new Date(input);
var diff = currentDate.getTime()-birthDate.getTime();
var age = diff/(1000*60*60*24*30*12);
age = Math.floor(age);

document.write("Your age is: "+age+"<br>");
document.write("Your birth year is: "+birthDate.getFullYear());

*/

/* Task 14

var customerName = prompt("Enter customer name: ");
var date = new Date();
var units = +prompt("Enter number of units: ");
var chargesPerUnit = 16;
var netBill = units*chargesPerUnit;
var lateCharges = 350;
var grossBill = netBill+lateCharges;

document.write("Customer Name: "+customerName+"<br>");
document.write("Month: "+findMonth(date.getMonth())+"<br>");
document.write("Number of units: "+units+"<br>");
document.write("Charges per unit: "+chargesPerUnit+"<br><br>");

document.write("Net amount payable(within due date): "+netBill+"<br>");
document.write("Late payment surcharges: "+lateCharges+"<br>");
document.write("Gross amount payable(after due date): "+grossBill);

function findMonth(monthNumber)
{
    switch(monthNumber)
    {
        case 0:
            return "January";
            break;
        case 1:
            return "February";
            break;
        case 2:
            return "March";
            break;
        case 3:
            return "April";
            break;
        case 4:
            return "May";
            break;
        case 5:
            return "June";
            break;
        case 6:
            return "July";
            break;
        case 7:
            return "August";
            break;
        case 8:
            return "September";
            break;
        case 9:
            return "October";
            break;
        case 10:
            return "November";
            break;
        case 11:
            return "December";
            break;    
        default:
            alert("Incorrect Result");

    } 
}

*/