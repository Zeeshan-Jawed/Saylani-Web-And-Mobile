//Chpt 17-20 Arrays & Loops

// 1. Declare and initialize an empty multidimensional 
// array. (Array of arrays)
// var emptyArray = [[],[],[]];


// 2. Declare and initialize a multidimensional 
// array representing the following matrix:
var num1 = [[0,1,2,3], [1,0,1,2], [2,1,0,1]]
for (i=0; i <= 2; i++){
    document.write(num1[i]+"</br>")
};

// 3. Write a program to print numeric counting from 1 to 10.
for (i=1; i <= 10; i++){
    document.write(i+"</br>")
};

// 4. Write a program to print multiplication table of any number using for loop.
//  Table number & length should be taken as an input from user.
var table = prompt("Enter a number to show its multiplication table");
var lenght = prompt("Enter a lenght of multiplication table");
for (i = 1; i <= lenght; i++){
    document.write(table+" X "+i+" = "+table*i+"</br>");
};


// 5. Write a program to print items of the following array using for loop: 
// fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]
var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
var len = fruits.length;
for (var i=0; i < len; i++){
document.write(fruits[i]+"</br>");
};
for (var i=0; i < len; i++){
document.write("Element at index "+i+" is "+ fruits[i]+"</br>");
};


// 6. Generate the following series in your browser. See example output. 
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 
var num = [];
for(var i = 0; i <=14; i++){
    num[i] = i+1;
};
document.write("<h2>counting :</h2></br>"+num+"<br/>");
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 
document.write(" Reverse counting :"+num.reverse()+"<br/>");
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 
var even = [];
for(var b = 1; b <= 20; b++){
    if(b % 2 === 0){
        even[b] = b;
    }
};
document.write("<h2>Even :</h2></br>"+even+"<br/>");
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 
for(var a = 1; a <= 20; a++){
    if(a % 2 !==0){
        odd[a] = a;
    }
};
document.write("<h2>Odd :</h2></br>"+odd+"<br/>")
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
for(var d = 1; d <= 20; d++){
    if(d % 2 === 0){
        series[d] = d+"k";
    }
};
document.write("<h2>Series :</h2></br>"+series+"<br/>")

// 7. You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] 
// Write a program to enable “search by user input” in an array. After searching, 
// prompt the user whether the given item is found in the list or not. Example:
var a = ["cake", "apple pie", "cookie", "chips", "patties"];
var order = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?")
var matchfound = false;
for( var i=0; i < a.length; i++){
 if( order === a[i]){
 	matchfound =true;
    alert(order+" is available at index "+i+" in our bakery");
    break
   }
}
if (matchfound === false){
     alert("We are sorry. "+order+" is not availabe in our bakery");
}

// 8. Write a program to identify the largest number 
// in the given array. A = [24, 53, 78, 91, 12]
// 9. Write a program to identify the 
// smallest number in the given array. A = [24, 53, 78, 91, 12]
var a = [24,53,78,91,12];
var max = Math.max.apply(Math,a);
var min = Math.min.apply(Math,a);
console.log(max , min);
document.write(
    "<h3> Array items: "+a+
    "</br> The largest number is " +max+
    "</br> The smallest number is " +min+"</h3></br>" 
);


// 10. Write a program to print multiples of 5 ranging 1 to 100.
for(var i = 1; i<=100; i++){
    if(i%5 === 0){
        document.write(i+",")
    }
};
