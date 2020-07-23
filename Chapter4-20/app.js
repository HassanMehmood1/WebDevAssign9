



//=============================================== Chapter # 4 ==========================
//Task # 1 
/*

var var1,var2,var3;

//Task # 2 
var var1 = "var 1 ";
var _var2 = "var 2 ";
var $var3 = "var 3 ";
var Var4 = " var 4 ";
var firstName = " first Name";
document.write(var1, _var2, $var3, Var4, firstName);
*/
//Illegal names
/*
var 123name ="";
var 123 =56;
var na me ="";
var "name" = "";
var alert = "keyword";
*/

//Task # 3
/*
document.write("<h1>Rules for naming JS variables</h1>");

document.write("Variable names can only contain, numbers, $ and _ . For example:$my_1stVariable <br>");
document.write("Variable must begin with a letter, $ or_ . For example: $name, _name or name<br>");
document.write("Variable names are case sensitive<br>");
document.write("Variable names should not be JS keywords<br>");

//=============================Chapter # 5============================ 
//Task # 1
var x=5;
var y=4;
var z=x+y;
document.write("sum of "+x+" and "+y+" is "+z+"<br>");


//Task # 2
z=x-y;
document.write("subtraction of "+x+" and "+y+" is "+z+"<br>");
z=x*y;
document.write("multiplication of "+x+" and "+y+" is "+z+"<br>");
z=x/y;
document.write("division of "+x+" and "+y+" is "+z+"<br>");

//Task # 3
var decVar; //  ==(a)
document.write("Value after variable declaration is "+decVar+"<br>"); //==(b)
decVar = 5; // ==(c)
document.write("Initial value: "+decVar+"<br>"); //==(d)
decVar++;//==(e)
document.write("Value after increment is: "+decVar+"<br>"); //==(f)
decVar+=7;//==(g)
document.write("Value after addition is: "+decVar+"<br>"); //==(h)
decVar--;//==(i)
document.write("Value after decrement is: "+decVar+"<br>"); //==(j)
var remVal = decVar%3;//==(k)
document.write("The remainder is: "+remVal+"<br>"); //==(l)


//Task # 4
var tickerPrice = 600;
var ticketCount = 5;
var totalPrice = ticketCount*tickerPrice;
document.write("Total cost to buy "+ticketCount+" tickets to a movie is "+totalPrice+"PKR <br>");


//Task # 5 
var number = 4;
document.write("Table of "+number+"<br>");
for (var i =1; i<11; i++){
    document.write(number+" x "+i+" = "+number*i +" <br>");
};

//Task # 6 
var celsius  = 25;
var faren = 70;
var conCelsius = (faren -32)*5/9;
var conFaren = (celsius*9/5)+32;
document.write(celsius+"\u00B0C is "+conFaren+"\u00B0F<br>");
document.write(faren+"\u00B0F is "+conCelsius+"\u00B0C<br>");


//Task # 7
var price1 = 650;
var price2 = 100;
var ordQuan1 = 3;
var ordQuan2 = 7;
var shCost = 100;
var totCost = price1*ordQuan1+price2*ordQuan2+shCost;
document.write("<h1>Shopping Cart</h1>")
document.write("Price of item 1 is "+price1+"<br>");
document.write("Quantity of item 1 is "+ordQuan1+"<br>");
document.write("Price of item 2 is "+price2+"<br>");
document.write("Quantity of item 2 is "+ordQuan2+"<br>");
document.write("Shipping charges is "+shCost+"<br>");
document.write("<br>")
document.write("Total cost of your order is "+totCost+"<br>");


//Task # 8 
document.write("<h1>Marks Sheet</h1>")
var totMarks = 980;
var obtMarks = 804;
var perc = (obtMarks/totMarks)*100;
document.write("Total marks: "+totMarks+"<br>");
document.write("Marks obtained: "+obtMarks+"<br>");
document.write("Percentage: "+perc+"% <br>");


//Task # 9
document.write("<h1>Currency in PKR</h1><br>"+"Total Currency in PKR: "+(10*104.80+25*28)+"<br>");


//Task # 10
var num = 5;
document.write("Original number = "+num+", Add 5 = "+(num+5)+", multiply by 10 = "+(num+5)*10+", Divide by 2 = "+(num+5)*10/2+"<br>");


//Task # 11
document.write("<h1>Age Calculator</h1>");
var curYear = 2020;
var birthYear = 1994;
var age = curYear - birthYear;
document.write("Current Year: "+curYear+"<br>"); 
document.write("Birth Year: "+birthYear+"<br>"); 
document.write("Your Age is: "+age+"<br>"); 


//Task # 12
document.write("<h1>The Geometrizer</h1>");
var raCircle = 20;
var pi = 3.142;
var circCircle = 2*pi*raCircle;
var area = pi*raCircle**2;
document.write("Radius of a Circle: "+raCircle+"<br>");
document.write("The Circumference is: "+circCircle+"<br>");
document.write("The Area is: "+area+"<br>");


//Task # 13
document.write("<h1>The Lifetime Supply Calculator</h1>");
var favSnack = "Choclate Chip"
var currAge = 15;
var estAge = 65;
var snackCount = 3;
document.write("Favourite Snack: "+favSnack+"<br>");
document.write("Current Age: "+currAge+"<br>");
document.write("Estimated Maximum Age: "+estAge+"<br>");
document.write("Amount of Snacks per Year: "+snackCount+"<br>");
document.write("You will need "+(estAge-currAge)*snackCount+" "+favSnack+" to last you untill the ripe old age of "+estAge+"<br>");


//==============================Chapter 6-9  ===========
//Task # 1
var a = 10;
document.write("Result: <br>"+"The value of a is: "+a+"<br>");
document.write(".......................................<br>");
document.write("The value of ++a is: "+(++a)+"<br>");
document.write("Now the value of a is: "+a+"<br><br>");
document.write("The value of a++ is: "+(a++)+"<br>");
document.write("Now the value of a is: "+a+"<br><br>");
document.write("The value of --a is: "+(--a)+"<br>");
document.write("Now the value of a is: "+a+"<br><br>");
document.write("The value of a-- is: "+(a--)+"<br>");
document.write("Now the value of a is: "+a+"<br>");


//Task # 2
var a=2, b=1;
var result = --a - --b + ++b + b--;
//  --a = 1
//  --a - --b = 1-0 = 1
//  --a - --b + ++b = 1-0 + 1 =2
//  --a - --b + ++b + b-- = 1-0 + 1 + 1 = 3
document.write("The value of a is: "+a+"<br>");
document.write("The value of b is: "+b+"<br>");
document.write("The value of result is: "+result+"<br>");


//Task # 3
var name=prompt("Enter your name");
document.write("Hello "+name+" its noce to meet you. <br>");


//Task # 5 
var number = prompt("Enter number here ", 5);
document.write("Table of "+number+"<br>");
for (var i =1; i<11; i++){
    document.write(number+" x "+i+" = "+number*i +" <br>");
};


//Task # 6
document.write("<h3>Subject Total Marks Obtained Marks Percentage</h3>");
var sub1 = prompt("enter first subject name here");
var sub2 = prompt("enter 2nd subject name here");
var sub3 = prompt("enter 3rd subject name here");
var totmarks = 100;
var obtsub1 = parseInt(prompt("Enter subject 1 obtained marks"));
var obtsub2 = parseInt(prompt("Enter subject 2 obtained marks"));
var obtsub3 = parseInt(prompt("Enter subject 3 obtained marks"));
var perc1 = (obtsub1/totmarks)*100;
var perc2 = (obtsub2/totmarks)*100;
var perc3 = (obtsub3/totmarks)*100;
var addTotMarks = totmarks*3;
var addObtmarks = obtsub1+obtsub2+obtsub3;
var addTotPerc = (addObtmarks/addTotMarks)*100;
document.write(sub1+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
+totmarks+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
+obtsub1+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+perc1+"%<br>");

document.write(sub2+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
+totmarks+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
+obtsub2+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+perc2+"%<br>");

document.write(sub3+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
+totmarks+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
+obtsub3+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+perc3+"%<br>");

document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
+addTotMarks+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
+addObtmarks+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+addTotPerc+"%<br>");



//============================Chapter 9-11 =============================
//Task # 1
var city = prompt("Enter city name ");
if (city ==="karachi"){
    document.write("Welcome to the city of Lights");
};


//Task # 2
var gender = prompt("Enter Gender here");
if (gender==="male"){
    document.write("Good Morning Sir,");
}
else if (gender==="female"){
    document.write("Good Morning Ma'm");
};



//Task # 3
var color = prompt("Enter Color here");
if (color==="red"){
    document.write("Must Stop");
}
else if (color==="yellow"){
    document.write("Ready to Move");
}
else if (color === "green"){
    document.write("Move Now");
};


//Task # 4
var fuel = prompt("Enter the amount of fuel in litters ");
if (fuel < 0.25){
    document.write("Please refill the fuel in your car.");
}


//Task # 5
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
} //alert popup

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
} // alrt not popup 

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");  // alert popup
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true"); // alert popup
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals"); // alerts popup
}

if (true){
    alert("True");// alert popup
    }
    if (false){
    alert("False");
    }

    if("car" < "cat"){
        alert("car is smaller than cat"); // alert popup
        }


//Task # 6 
document.write("<h3>Marks Sheet</h3>");
var totmarks = parseInt(prompt("Enter 3 subject Total marks"));
var obtsub = parseInt(prompt("Enter 3 subject obtained marks"));
var totPerc = (obtsub/totmarks)*100;
document.write("Total Marks: "+totmarks+"<br>");
document.write("Marks Obtained: "+obtsub+"<br>");
document.write("Percentage: "+totPerc+"% <br>");
var grade = "";
var remarks = "";
if (totPerc>=80){
    grade = "A-one"
    remarks = "Excellent";
    document.write("Grade: "+grade+"<br>");
    document.write("Remarks: "+remarks+"<br>");
}
else if (totPerc>=70 && totPerc<80){
    grade = "A"
    remarks = "Good";
    document.write("Grade: "+grade+"<br>");
    document.write("Remarks: "+remarks+"<br>");
}
else if (totPerc>=60 && totPerc<70){
    grade = "B"
    remarks = "You need to Improve";
    document.write("Grade: "+grade+"<br>");
    document.write("Remarks: "+remarks+"<br>");
}
else if (totPerc<60){
    grade = "Fail"
    remarks = "Sorry";
    document.write("Grade: "+grade+"<br>");
    document.write("Remarks: "+remarks+"<br>");
}
else{
    document.write("you entered invalid number");
};


//Task # 7 
var secNum = Math.floor((Math.random() * 10) + 1);
var guessNum = parseInt(prompt("Enter the guessing number: "));
if (secNum==guessNum){
    document.write("Bingo! Correct Answer ");
}
else if(secNum==guessNum+1){
    document.write("Close enough to the correct answer");
};


//Task # 8
var num = parseInt(prompt("Enter the number: "));
if (num%3==0){
    document.write("The Number is divisible by 3");
}


//Task # 9
var num = parseInt(prompt("Enter the number: "));
if (num%2==0){
    document.write("The Number is even");
}
else{
    document.write("The Number is Odd");
};


//Task # 10
var temp = parseInt(prompt("Enter the Temperature: "));
if (temp>40){
    document.write("It is too hot outside");
}
else if (temp>=30 && temp<40){
    document.write("The weather today is normal");
}
else if (temp>=20 && temp<30){
    document.write("Todays Weather is cool.");
}
else{
    document.write("OMG! Todays Weather is so cool.");
};


//Task # 11
var firstNum = parseInt(prompt("Enter the First Number: "));
var secondNum = parseInt(prompt("Enter the Second Number: "));
var operator = prompt("Enter the Operation to perform: ");
if (operator=="+"){
    document.write("The addition of "+firstNum+" and "+secondNum+" is = "+(firstNum+secondNum));
}
else if (operator=="-"){
    document.write("The subtraction of "+firstNum+" and "+secondNum+" is = "+(firstNum-secondNum));
}
else if (operator=="*"){
    document.write("The Multiplication of "+firstNum+" and "+secondNum+" is = "+(firstNum*secondNum));
}
else if (operator=="/"){
    document.write("The division of "+firstNum+" and "+secondNum+" is = "+(firstNum/secondNum));
}


//==================================== Chapter 12-13 ==========================
//Task # 1
var charac = "string";



//Task # 2
var int1 = 49;
var int2 = 45;
if (int1>int2){
    document.write(int1+" is greater than "+int2);
}
else if(int2>int1){
    document.write(int2+" is greater than "+int1);
}
else{
    document.write("Both numbers are equall");
}


//Task # 3
var num1 = parseInt(prompt("Enter a Number"));
if (num1>0){
    document.write("Number is Positive");
}
else if(num1<0){
    document.write("Number is Negative");
}
else{
    document.write("The Number is zero");
}


//Task # 4
var str1 = prompt("Enter a Character: ");
if (str1 == 'a' || str1 == 'A' || str1 == 'e' || str1 == 'E' || str1 == 'i' || str1 == 'I' || str1 == 'o' || str1 == 'O' || str1 == 'u' || str1 == 'U'){
    document.write("the character is vowel");
}
else{
    document.write("The Character is not a vowel");
};


//Task # 5
var pass = "ha112233";
var entPass = prompt("Enter A password Here: ");
if(entPass==""){
    document.write("Please Enter a Password");
}
else if(entPass==pass){
    document.write("Password is Matched correctly.");
}
else{
    document.write("Password Incorrect");
};


//Task # 6
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
}
else {
    greeting = "Good evening";
}



//Task # 7
var time = parseInt(prompt("Enter the Temperature: "));
var greetings = "";
if (time>=0000 && time < 1200){
    greetings = "Good Morning";
}
else if (time >=1200 && time < 1700){
    greetings = "Good Afternoon";
}
else if (time >= 1700 && time < 2100){
    greetings = "Good Evening";
}
else if (time >= 2100 && time <= 2359){
    greetings = "Good Night";
}
else{
    greetings = "Invalid Time Entered";
}
document.write(greetings);



// =============================================== Chapter # 14-16 =================
//Task # 1
var stdName = [];

//Task # 2
var stdName = {};

//Task # 3 
var strArray = ["Hassan","Ali","Hamid","Saleem"];


//Task # 4
var numArray = [1,2,3,4,5,6,7,8,9];

//Task # 5
var boolArray = [true,true,true,false,false,false];


//Task # 6
var mixedArray = ["Hassan", 1,3,"Ali", true, "Saad",8,false];


//Task # 7
var eduQual = ['SSC','HSC','BCS','BS','BCOM','MS','M.Phil','PhD'];
for (var i=0; i<8; i++){
    document.write(i+1+") "+eduQual[i]+"<br>");
}


//Task # 8
var stdName = ["Michael", "John","Tony"];
var stdScore = [320, 230, 480];
var totScore = 500;
for (var i=0; i<3; i++){
    document.write("Score of "+stdName[i]+" is "+stdScore[i]+". Percentage: "+(stdScore[i]/totScore)*100+"% <br>");
};


//Task # 9
var colorArray = [];


//Task # 10
var stdScor = [320,230,480,120];
document.write("Scores of Students: "+stdScor+"<br>");
document.write("Ordered Scores of Students: "+stdScor.sort()+"<br>");


// Task # 11 
var cityName = ['Karachi','Lahore','Islamabad','Quetta','Peshawar'];
var selected = cityName.slice(0,3);
document.write("Cities list: <br>"+cityName+"<br>");
document.write("Selected Cities list: <br>"+selected+"<br>");


//Task # 12 
var arr = ["This ", " is ", " my ", " cat"];
var arrStr = arr.join("");
document.write("Array: <br>"+arr+"<br> <br>");
document.write("String: <br>"+arrStr+"<br>");



//Task # 13 
var devices = ["keyboard","mouse","printer","monitor"];
document.write("Devices: <br>"+devices+"<br><br>");
document.write("Out: <br>"+devices.shift()+"<br>");
document.write("Out: <br>"+devices.shift()+"<br>");
document.write("Out: <br>"+devices.shift()+"<br>");
document.write("Out: <br>"+devices.shift()+"<br>");


//Task # 14 
var devices = ["keyboard","mouse","printer","monitor"];
document.write("Devices: <br>"+devices+"<br><br>");
document.write("Out: <br>"+devices.pop()+"<br>");
document.write("Out: <br>"+devices.pop()+"<br>");
document.write("Out: <br>"+devices.pop()+"<br>");
document.write("Out: <br>"+devices.pop()+"<br>");


//Task # 15 
var phoneManuf = ["Apple", "Samsung","Motorola","Nokia","Sony","Haier"];
document.write(phoneManuf);


// ==========================Chapter # 17-20 =====================
//Task # 1
var mdimArray = [[],[]];


//Task # 2
var mdimArray1 = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];


//Task # 3
for (var i=1;i<11; i++){
    document.write(i+"<br>")
}

//Task # 4
var number = prompt("Enter a number to show its multiplication table ");
var x = prompt("Enter length multiplication table ");
document.write("Multiplication table of: "+number+"<br>"+"Length: "+x+"<br>");
for (var i =1; i<=x; i++){
    document.write(number+" x "+i+" = "+number*i +" <br>");
};



//Task # 5
var fruits = ["apple","banana","mango","orange","strawberry"];
for (var i=0; i<fruits.length; i++){
    document.write(fruits[i]+"<br>");
};
for (var i=0; i<fruits.length; i++){
    document.write("Element at index "+i+" is "+fruits[i]+"<br>");
};
*/


