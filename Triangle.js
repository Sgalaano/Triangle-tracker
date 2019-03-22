function getResult(){
var hypotenuse= parseFloat(prompt("side c"));
var opposite = parseFloat(prompt("side b"));
var adjacent = parseFloat(prompt("side a"));
/* var determine = function(hypotenuse,opposite, adjacent){
if (hypotenuse === opposite && opposite === adjacent && hypotenuse === adjacent){
alert("Equilateral");
}
else if ((hypotenuse === opposite && opposite === adjacent) (hypotenuse != adjacent && opposite !== adjacent));
alert("Isosceles");
}
determine(); *


if(hypotenuse === opposite && hypotenuse === hypotenuse && opposite === adjacent){
alert("Equilateral");
}
else if(hypotenuse === opposite || hypotenuse === adjacent || opposite === adjacent){
alert("Isosceles");
}
else if((hypotenuse + opposite) <= adjacent || (hypotenuse + adjacent) <= opposite || (opposite + adjacent) <= hypotenuse) {
alert("Not a definite triangle");
}
else{
alert("Scalene");
}
}
