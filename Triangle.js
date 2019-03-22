var h = parseFloat(prompt("Enter dimension of first side"));
var s = parseFloat(prompt("Enter dimension of Second side"));
var w = parseFloat(prompt("Enter dimension of Third side"));
var sides = function(a,b,c){
return( a+b>c && b+c>a && c+a>b)
}
if (sides(h,s,w) && h===s && s===w){
alert("This forms an Equilateral triangle.")
}
else if(sides(h,s,w) && h===s || h===w || w===s){
alert ("This forms an isosceles triangle.")
}
else if(sides(h,s,w) && h!=w!=s){
alert ("This forms a scarlene triangle " )
}
else {
alert("ERROR, INVALID MEASUREMENTS ")
}
