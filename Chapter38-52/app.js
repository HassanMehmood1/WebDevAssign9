// ===========================Chapter 38-42 Tasks================


// ========================Task #1

/*
function pow(a,b){
    return a**b;
}
var a=5;
var b=2;
document.write("The Power is "+pow(a,b));


//==============================Task # 2 
var year = prompt("Enter Year");
if (year%4==0){
    document.write("the year is leap year");
}
else{
    document.write("The year is not a leap year");
}


//==============================Task # 3  
function area(a,b,c){
    var s = (a+b+c)/2;
    var area = s*(s-a)*(s-b)*(s-c);
    return area;
}
var a=3;
var b=7;
var c=8;
document.write("The area of triangle is "+area(a,b,c));


//==============================Task # 4
function main(sub1,sub2,sub3,tot){
    document.write("the average of 3 subjects is = "+avg(sub1,sub2,sub3));
    document.write(" The percentage of 3 subjects is = "+percentage(sub1,sub2,sub3,tot));

}
function avg(sub1,sub2,sub3){
    return (sub1+sub2+sub3)/3;
}
function percentage(sub1,sub2,sub3,tot){
    var perc = (sub1+sub2+sub3)*100/tot;
    return perc;
}

var sub1 = 76;
var sub2 = 68;
var sub3 = 69;
var tot = 300;
main(sub1,sub2,sub3,tot);


//==============================Task # 5
function findindex(str1,char1){
    var found = 0 ;
    for (var i=0; i<str1.length; i++){
        if (str1[i]===char1){
            return i;
        }
    }
}

var str1 = "ali is here";
var char1 = "s"
document.write(findindex(str1,char1));



//==============================Task # 6
function removeVowels(str) {
    return str.replace(/[aeiou]/gi, '');
  }
  var str = "ali is good man asesisosus";
  document.write(str+"<br>")
  document.write(removeVowels(str));

//==============================Task # 7




//==============================Task # 8
function kmToMeter(num){
    return num*1000;
}
function kmToFeet(num){
    return num*3280.84;
}
function kmToInches(num){
    return num*39370.1;
}
function kmToCentimeter(num){
    return num*100000;
}
var dist = 3;
document.write("Km to Meter = "+kmToMeter(dist)+"<br>")
document.write("Km to Feet = "+kmToFeet(dist)+"<br>")
document.write("Km to Inches = "+kmToInches(dist)+"<br>")
document.write("Km to Centimeters = "+kmToCentimeter(dist)+"<br>")

//==============================Task # 9

function overTime(hour){
    if (hour>40){
        return (hour-40)*12;
    }
    else{
        return "not eligible for overtime";
    }
}
var hour = 45;
document.write("your overtime is = "+overTime(hour))


//==============================Task # 10
var amount = 169;
document.write("your 100 notes are = "+Math.floor(amount/100)+"<br>");
document.write("your 50 notes are = "+Math.floor((amount%100)/50)+"<br>");
document.write("your ten notes are = "+Math.floor(((amount%100)%50)/10)+"<br>");
document.write("your remaining amount are = "+(((amount%100)%50)%10)+"<br>");


// ===========================Chapter 43-48 Tasks================

// ========================Task #1
function popup(message){
    alert(message);
}

// ========================Task # 2 
function popup(message){
    alert(message);
}

// ========================Task # 4

function rollover(my_image)
    {

        my_image.src = 'car2.jpg';

    }

function rollout(my_image)
    {

        my_image.src = 'car1.jpg';

    }

*/

// ===========================Chapter 58-67 Tasks================

// ========================Task # 1












