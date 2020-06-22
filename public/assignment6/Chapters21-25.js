 // Chapters 21-25

/* Task 1

var firstName = prompt("Enter your first name: ");
var secondName = prompt("Enter your second name: ");

alert("Welcome "+firstName+" "+secondName);

*/

/* Task 2

var favPhone = prompt("Enter your favorite phone model: ");

document.write("My favorite phone is: "+favPhone+"<br>");
document.write("Length of string: "+favPhone.length);

*/

/* Task 3

var x = "Pakistani";

document.write("String: "+x+"<br>");
document.write("Index of 'n': "+x.indexOf("n"));

*/

/* Task 4

var x = "Hello World";

document.write("String: "+x+"<br>");
document.write("Last index of 'l': "+x.lastIndexOf("l"));

*/

/* Task 5

var x = "Pakistani";

document.write("String: "+x+"<br>");
document.write("Character at index 3: "+x.charAt(3));

*/

/* Task 6

var firstName = prompt("Enter your first name: ");
var secondName = prompt("Enter your second name: ");

alert("Welcome "+firstName.concat(" "+secondName));

*/

/* Task 7

var city = "Hyderabad";

document.write("City: "+city+"<br>");
document.write("After replacement: "+city.replace("Hyder","Islam"));

*/

/* Task 8

var message = "Ali and Sami are best friends. They play cricket and football together.";

document.write("Result: "+message.replace(/and/g,"&"));

*/

/* Task 9

var str = "472";
var num = +str;

document.write("Value: "+str+"<br>");
document.write("Type: "+typeof(str)+"<br>");
document.write("Value: "+num+"<br>");
document.write("Type: "+typeof(num)+"<br>");

*/

/* Task 10

var input = prompt("Enter Text: ");

document.write("User input: "+input+"<br>");
document.write("Upper Case: "+input.toLocaleUpperCase());

*/

/* Task 11

var input = prompt("Enter Text: ");
var x = input.slice(0,1);
var y = x.toUpperCase()+input.slice(1);
document.write("User input: "+input+"<br>");
document.write("Title Case: "+y);

*/

/* Task 12

var num = 35.36;
var x = num.toString().replace(".","");
document.write("Nubmer: "+num+"<br>");
document.write("Result: "+x);

*/

/* Task 13

var username = prompt("Enter your name: ");

var len = username.length;

for(var i=0; i<len; i++)
{
    x = username.charCodeAt(i);

    if(x===33 || x===44 || x===46 || x===64)
    {
        username = prompt("Enter a valid name please: ");
        

    }
}

*/

/* Task 14

var arr = ["cake","apple pie","cookie","chips","patties"];
var input = prompt("Welcome to the bakery\n\nWhat do you want to order, Sir/Ma'am?: ");
var len = arr.length;
var flag = 0;

for(var i=0; i<len; i++)
{
    if(arr[i]===input.toLocaleLowerCase())
    {
        alert(input+" is available at index "+i+" in our bakery");
        flag = 1;
        break;
    }
}
if(flag==0)
{
    alert("We are sorry. "+input+" is not available in our bakery.");
}

*/

/* Task 15

var x = prompt("Enter password: ");

var len = x.length;
var fIndex = x.slice(0,1);

if(len<6)
{
    document.write("Entered Password: "+x+"<br>");
    document.write("Password length is not enough!"+"<br>");
    document.write("Please Enter a valid password: ");
}
else if(fIndex.search(/[0-9]/i)!=-1)
{
    document.write("Entered Password: "+x+"<br>");
    document.write("Password cannot begin with a number"+"<br>");
    document.write("Please Enter a valid password: ");
}
else if(x.search(/[0-9,a-z]/gi)===-1)
{
    document.write("Entered Password: "+x+"<br>");
    document.write("Password needs at least one letter and one number"+"<br>");
    document.write("Please Enter a valid password: ");   
}
else{
    document.write("Thank you!");
}

*/

/* Task 16

var university = "University of Karachi";
var arr = university.split("");
var len = arr.length;

for(var i=0; i<len; i++)
{
    document.write(arr[i]+"<br>");
}

*/

/* Task 17

var input = prompt("Enter input: ");

var len = input.length;

document.write("User Input: "+input+"<br>");
document.write("Last Character of input: "+input.charAt(len-1));

*/

/* Task 18

var str =  "The quick brown fox jumps over the lazy dog";

var len = str.length;

var flag = 0;

for(var i=0; i<len; i++)
{
    var temp = str.slice(i,i+1);

    if(temp.search(/t/i)!=-1)
    {
        var temp = str.slice(i+1,i+2);

        if(temp.search(/h/i)!=-1)
        {
            var temp = str.slice(i+2,i+3);

            if(temp.search(/e/i)!=-1)
            {
                flag++;
            }
        }
    }
}

document.write(flag);

*/