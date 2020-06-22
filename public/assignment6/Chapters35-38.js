       // Chapters 35-38

/* Tasks 1

dateTime();

function dateTime()
{
    document.write(new Date());
}

*/

/* Task 2

var firstName = "Shah";
var lastName = "Fahad";

fullName(firstName,lastName);

function fullName(firstName, lastName)
{
    document.write("Welcome "+firstName+" "+lastName+"!");
}

*/

/* Task 3

var num1 = +prompt("Enter first number: ");
var num2 = +prompt("Enter second number: ");
document.write("Sum is: "+sum(num1,num2));

function sum(num1, num2)
{
    return num1+num2;
}

*/

/* Task 4

var num1 = +prompt("Enter first number: ");
var num2 = +prompt("Enter second number: ");
var op = prompt("Enter operator: ");

document.write(calc(num1,num2,op));

function calc(num1,num2,op)
{

    if(op==="+")
    {
        return num1+num2;
    }
    else if(op==="-")
    {
        return num1-num2;
    }
    else if(op==="*")
    {
        return num1*num2;
    }
    else if(op==="/")
    {
        return num1/num2;
    }
    else if(op==="%")
    {
        return num1%num2;
    }
}

*/

/* Task 5

var input = +prompt("Enter a number: ");

sqr(input);

function sqr(num)
{
    document.write("Square of "+num+" is "+num*num);
}

*/

/* Task 6

var input = +prompt("Enter a number: ");

document.write("Factorial of "+input+" is "+fact(input));

function fact(num)
{
    result = num;

    for(var i=1; i<num; i++)
    {
        result = result*i;
    }
    return result;
}

*/

/* Task 7

var start = +prompt("Enter starting number: ");
var end = +prompt("Enter ending number: ");

counting(start,end);

function counting(start,end)
{
    for(var i=start; i<=end; i++)
    {
        document.write(i+"<br>");
    }
}

*/

/* Task 8

var base = +prompt("Enter base value: ");
var perp = +prompt("Enter perpendicular value: ");

document.write("Hypotenuse is: "+hypo(base,perp));

function hypo(base,perp)
{
    function nestHyp(base,perp)
    {
        var baseSq = base*base;
        var perpSq = perp*perp;
        var hypoSq = baseSq+perpSq;
        
        
        return hypoSq;
    }

    var hypo = Math.sqrt(nestHyp(base,perp));
    return  hypo;
}

*/

/* Task 9

var width = 5;
var height = 7;

area(5,7);
area(width,height);

function area(width,height)
{
    document.write("Area is "+(width*height)+"<br>");
}

*/

/* Task 10

var str = prompt("Enter a string: ");

isPalindrome(str.toLowerCase());

function isPalindrome(str)
{
    var revStr = str.split("").reverse().join("");

    if(str===revStr)
    {
        document.write("The string '"+str+"' is a palindrome!");
    }
    else{
        document.write("The string '"+str+"' is not a  palindrome!");
    }
    
}

*/

/* Task 11

var str = prompt("Enter a string: ");

document.write("Your String: "+str+"<br>");
document.write("Converted String: "+toTitleCase(str));

function toTitleCase(str)
{

    var arr = str.split(" ");
    var len = arr.length;

    for(var i=0; i<len; i++)
    {
        var firstChar = arr[i].slice(0,1).toUpperCase();
        var remainingChar = arr[i].slice(1);
        var newElement = firstChar+remainingChar;
        arr[i] = newElement;
    }

    var newStr = arr.join(" ");

    return newStr;

}

*/

/* Task 12

var str = prompt("Enter a string: ");

document.write("Your string: "+str+"<br>");
document.write("Longest word: "+longestWord(str));

function longestWord(str)
{

    var arr = str.split(" ");
    var arrLen = arr.length;
    var longestWord = "";

    for(var i=0; i<arrLen; i++)
    {
        if(arr[i].length > longestWord.length)
        {
            longestWord = arr[i];
        }
    }

    return longestWord;

    

}

*/

/* Task 13

var str = prompt("Enter a string: ");
var char = prompt("Enter a character: ");

document.write("Your string: "+str+"<br>");
document.write("Your character: "+char+"<br>");
document.write("Number of occurences of '"+char+"' is: "+occur(str,char));

function occur(str,char)
{
    var str = "Mohammad Obaid Owais";
    var char = "o";
    var len = str.length;

    var flag = 0;

    for(var i=0; i<len; i++)
    {
        if(str.slice(i,i+1).toLowerCase()===char.slice(0,1).toLowerCase())
        {
            flag++;
        }
    }

    return flag;
}

*/

/* Task 14

var radius = +prompt("Enter radius of a circle: ");

calcCircumference(radius);
calcArea(radius);

function calcCircumference(r)
{
    document.write("The circumference is :"+(2*Math.PI*r)+"<br>");
}

function calcArea(r)
{
    document.write("The area is: "+(Math.PI*r*r)+"<br>");
}

*/

