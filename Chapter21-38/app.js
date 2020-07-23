
//========================== Chapter 21-25 ===========================



//Note:
//Mostly I am using document.write instead of alert command
//also give value to the variable directly instead of using prompt command


//Task # 1

/*
var firstName = "Hassan"; //======
var lastName = "Mehmood"; //======
var fullName = firstName + " "+lastName;
document.write("Hello, " +fullName+"<br>");

//Task # 2
var phoneModel = " Samsung Galaxy S6 Edge Plus";
document.write("My favourite phone is: "+ phoneModel+"<br>");
document.write("Length of string: "+ phoneModel.length+"<br>");

//Task # 3
var letter = "Pakistani"
document.write("String: "+letter +"<br>");
document.write("Index of 'n': "+letter.indexOf("n") +"<br>");

//Task # 4
var letter = "Hello World"
document.write("String: "+letter +"<br>");
document.write("last Index of 'l': "+letter.indexOf("l",4) +"<br>");

//Task # 5
var letter = "Pakistani"
document.write("String: "+letter +"<br>");
document.write("Character at index 3: "+letter[3] +"<br>");

//Task # 6
var firstName = "Hassan ";
var lastName = "Mehmood";
var fullName = firstName.concat(lastName)
document.write("Hello, " +fullName+"<br>");

//Task # 7
var city = "Hyderabad"
var rep = city.replace("Hyder", "Islam"); 
document.write("City: "+city +"<br>");
document.write("After replacement: "+rep +"<br>");

//Task # 8
var message = "Ali and Sami are best friends. They play cricket and football together";
var repl = message.replace("and","&");  //=====
document.write("Message before replacement: "+message +"<br>");
document.write("After replacement: "+repl +"<br>");

//task # 9
var str1 = "472"
document.write("Value: " +str1+"<br>");
document.write("Type: " +typeof(str1)+"<br>");
var num1 = parseInt(str1)
document.write("Value: " +num1+"<br>");
document.write("Type: " +typeof(num1)+"<br>");


//Task # 10
var inp1 = "peanuts";
document.write("User Input: " +inp1+"<br>");
document.write("Upper case: " +inp1.toUpperCase()+"<br>");

//task # 11
var inp1 = "javascript";
document.write("User Input: " +inp1+"<br>");
document.write("Title case: " +inp1.toLocaleUpperCase(5)+"<br>");//===


//Task # 12
var num = 35.36;
document.write("Number: " +num+"<br>");
num = num.toString();
document.write("Result: " +num.trim(2)+"<br>");//=======

//rask # 13
//=======


//Task # 14
var A = ["cake","apple pie","cookie","chips","patties"];
var userInp = "apple PIE";
if (A.includes(userInp.toLowerCase()) ){
    document.write(userInp+" is available at index "+A.indexOf(userInp.toLocaleLowerCase())+" in our bakery <br>");
}//=======
else{
   document.write("We are sorry. "+userInp+" is not available in our bakery"+"<br>");
}


//Task # 15 
//=================require some modification


//Task # 16
var university = "University of Karachi";
var arrUni = university.split("");
for (var i=0; i<arrUni.length; i++){
    document.write(arrUni[i]+"<br>");
}


//Task # 17
var inp = "Pakistan";
document.write("User Input: " +inp+"<br>");
document.write("Last Character of input: " +inp[inp.length-1]+"<br>");

//Task # 18
var str1 = "The quick brown fox jumps over the lazy dog";
document.write("Text: " +str1+"<br>");
document.write("There are " +str1.split("the").length +" occurrence(s) of word 'the'<br>");




//========================== Chapter 26-30 ===========================
//Task # 1
var num = 3.45214;
document.write("number: " +num+"<br>");
document.write("round off value: " +Math.round(num)+"<br>");
document.write("floor value: " +Math.floor(num)+"<br>");
document.write("ceil value: " +Math.ceil(num)+"<br>");


//Task # 2
var num = -2.673;
document.write("number: " +num+"<br>");
document.write("round off value: " +Math.round(num)+"<br>");
document.write("floor value: " +Math.floor(num)+"<br>");
document.write("ceil value: " +Math.ceil(num)+"<br>");

//Task # 3
var num = -4;
document.write("The absolute value of "+num+" is "+Math.abs(num)+"<br>");


//Task # 4
var randNum = Math.random()*10;
var randNum1 = Math.round(randNum)
if (randNum1<=6){
    document.write("random dice value: " +randNum1+"<br>");
}


//Task # 5
var toss = Math.random();
toss = Math.round(toss);
document.write("Random Coin values: " +parseInt(toss+1)+"<br>");
toss = Math.random();
toss = Math.round(toss);
document.write("Random Coin values: " +parseInt(toss+1)+"<br>");


//Task # 6
var ranNum = Math.random()*100;
ranNum = Math.round(ranNum);
document.write("Random number between 1 and 100: " +ranNum+"<br>");

//Task # 7
var weight = 50.3;
document.write("The weight of user is " +weight+" Kilograms<br>");

//Task # 8
var secNum = Math.floor((Math.random() * 10) + 1);
var guessNum = parseInt(prompt("Enter the guessing number: "));
if (secNum==guessNum){
    document.write("Bingo! Correct Answer ");
}
else if(secNum==guessNum+1){
    document.write("Close enough to the correct answer");
};


//========================== Chapter 31-34 ===========================
//Task # 1
var date = new Date();
document.write(date+"<br>");

//Task # 2
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const d = new Date();
document.write("Current month: " + monthNames[d.getMonth()]+"<br>");

//Task # 3
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var d = new Date();
var dayName = days[d.getDay()];
document.write("Today is: " + dayName.substring(0,3)+"<br>");

//Task # 4
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var d = new Date();
var dayName = days[d.getDay()];
if (dayName=="Sunday" || dayName=="Saturday"){
    document.write("It's Fun Day: " + "<br>");
}

//Task # 5
var message = "First fifteen days of the month";
var message1 = "Last days of the month";
var d = new Date();
var day = d.getDate();
if (day<16){
    document.write(message+ "<br>");
}
else{
    document.write(message1+ "<br>");
}

//Task # 6
var d= new Date();
var miliSec = Date.now();
var minute = (miliSec/1000)/60;
document.write("Current Date: "+d+ "<br>");
document.write("Elapsed milliseconds since january 1, 1970: "+miliSec+ "<br>");
document.write("Elapsed minutes since january 1, 1970:  "+minute+ "<br>");


//Task # 7
var d= new Date();
var hour = d.getHours();
document.write("Current Time hours: "+hour+ "<br>");
if (hour <12){
    document.write("Its AM"+"<br>");
}
else{
    document.write("Its PM"+"<br>");
}


//Task # 8
var laterDate= new Date("Dec 31 2020");
document.write("Later Date: "+laterDate+"<br>");


//Task # 9
var date1 = new Date("06/18/2015"); 
var date2 = new Date();  
var timeDiff = date2.getTime() - date1.getTime();  
var dayDiff = timeDiff / (1000 * 3600 * 24); 
document.write(Math.round(dayDiff)+" days have passed since 1st Ramadan, 2015"+"<br>"); 


//========================== Chapter 35-38 ===========================
//Task # 1
function printDate(){
    d= new Date();
    document.write(d);
};
printDate();
document.write("<br>");


//Task # 2
function greetings(firstName, lastName){
    firstName = firstName;
    lastName = lastName;
    document.write("Hello! "+firstName+" "+lastName);
};
greetings("Hassan","Mehmood");
document.write("<br>");


//Task # 3
function addNum(x, y){
    return x+y;
};
var num1 = parseInt(prompt("Enter First Number"));
var num2 = parseInt(prompt("Enter Second Number"));
var result = addNum(num1,num2);
document.write("The sum is: "+result+"<br>");


//Task # 4
function calc(x, y, op){
    if(op=="+"){
        return x+y;
    }
    else if(op=="-"){
        return x-y;
    }
    else if(op=="*"){
        return x*y;
    }
    else if(op=="/"){
        return x/y;
    }
    else{
        return "You Entered Invalid Number";
    }
};
var num1 = parseInt(prompt("Enter First Number"));
var num2 = parseInt(prompt("Enter Second Number"));
var oper = prompt("Enter Operation");
var result = calc(num1,num2, oper);
document.write("The result of "+num1+" "+oper+" "+num2+" = "+result+"<br>");


//Task # 5
function square(x){
    return x*x;
}
var num = 9;
var sqr = square(num)
document.write("The Square is: "+sqr+"<br>")


//Task # 6
function fact(x){
    var ans=1;               
    for (var i = 2; i <= x; i++) 
        ans = ans * i; 
    return ans;
};
var num = 6;
var res = fact(num);
document.write("the Factorial is: "+ res);


//Task # 7
function range(start, end) {
    var ans = [];
    for (var i = start; i <= end; i++) {
        ans.push(i);
    }
    return ans;
}
document.write(range(3,9)+"<br>");



//Task # 8
function square(x){
    return x*x;
}
function calHypotenuse(b,p){
    var x= square(b);
    var y = square(p);
    var sum = x+y;
    return sum
}
var calTri = calHypotenuse(5,4);
document.write(calTri);


*/















