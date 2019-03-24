var a = parseFloat(prompt("Enter your preferred length:"));
var b = parseFloat(prompt("Enter your preferred width:"));
var c = parseFloat(prompt("Enter your preferred height:"));

var sides = function(a,b,c){
return( a+b>c && b+c>a && c+a>b)
}
if (sides(a,b,c) && a===b && b===c){
alert("This forms an Equilateral triangle")
}

else if(side(a,b,c) && a===b || b===c || a===c){
alert("This forms an isosceles triangle")
}

else if(sides(a,b,c) && a!=b!=c){
alert("This forms a scarlene triangle")
}

else{
alert("ERROR INVALID MEASUREMENTS")
}
