        // Chapter 26-30


/* Task 1

var int = +prompt("Enter positive integer: ");        

document.write("Number: "+int+"<br>");
document.write("Round off value: "+Math.round(int)+"<br>");
document.write("Floor value: "+Math.floor(int)+"<br>");
document.write("Ceil Value: "+Math.ceil(int)+"<br>");

*/

/* Task 2

var int = +prompt("Enter negative integer: ");        

if(int<0)
{
    document.write("Number: "+int+"<br>");
    document.write("Round off value: "+Math.round(int)+"<br>");
    document.write("Floor value: "+Math.floor(int)+"<br>");
    document.write("Ceil Value: "+Math.ceil(int)+"<br>");    
}
else{
    document.write("Incorrect Integer");
}

*/

/* Task 3

var num = +prompt("Enter a number: ");

document.write("The absolute value of "+num+" is "+Math.abs(num));

*/

/* Task 4

for(var i=0; i<2; i++)
{
    result = Math.random()*6+1;
    result = Math.floor(result);
    document.write("Random dice value: "+result+"<br>");
}

*/

/* Task 5

result = Math.random()*2+1;
result = Math.floor(result);
if(result===1)
{
    document.write("Random coin value: Heads");

}
else{
    document.write("Random coin value: Tails");

}

*/

/* Task 6

result = Math.random()*100+1;
result = Math.floor(result);
document.write("Random number between 1 and 100: "+result);

*/

/* Task 7

var input = prompt("Enter your weight in kilograms: ");

var x = parseFloat(input);

document.write("The weight of user is "+x+" kilograms");

*/

/* Task 8

var secretNumber = Math.random()*10+1;
secretNumber = Math.floor(secretNumber);

var input = +prompt("Enter a number between 1 and 10");

if(input>10 || input<1)
{
    document.write("Incorrect Input");
}
else{
    if(input===secretNumber)
    {
        document.write("Congratulations!");
    }
    else
    {
        document.write("Doesn't match!")
    }
}

*/