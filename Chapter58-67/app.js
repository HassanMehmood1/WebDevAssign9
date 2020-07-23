//=========================Task # 1

var mainContent = document.getElementById("main-content");
console.log(mainContent.childNodes);

var render = mainContent.getElementsByClassName("render");


for (var i=0; i<5; i++){
document.write(render[i].innerHTML +"<br>");
}









