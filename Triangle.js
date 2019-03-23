function findout() {
var inp1=document.getElementById("data1").value;
var inp2=document.getElementById("data2").value;
var inp3=document.getElementById("data3").value;
var h =parseInt(inp1);
var s =parseInt(inp2);
var w =parseInt(inp3);
if (h === s && s === w && w === h){
  alert("EQUILATERAL TRAIANGLE");
}
else if (h === s && h !== w) {
  alert("ISOSCELES TRIANGLE");
}else if (h === w && h !== s) 
}else if (h!== s && s !== w && h !== w && h + s > w && s + w > w)
  alert("SCALENE TRIANGLE");
}else if (h + s <= w) {
  alert ("NOT A TRIANGLE");
}else if (h + w <=s) {
  alert ("NOT A TRIANGLE");
}else if (s + w <=h)  {
  alert ("NOT A TRIANGLE");
}
}function findout() {
var inp1=document.getElementById("data1").value;
var inp2=document.getElementById("data2").value;
var inp3=document.getElementById("data3").value;
var sideA=parseInt(inp1);
var sideB=parseInt(inp2);
var sideC=parseInt(inp3);
if (sideA === sideB && sideB === sideC && sideC === sideA){
  alert("EQUILATERAL TRAIANGLE");
}
else if (sideA === sideB && sideA !== sideC) {
  alert("ISOSCELES TRIANGLE");
}else if (sideA === sideC && sideA !== sideB) {
  alert("ISOSCELES TRAIANGLE");
}else if (sideB === sideC && sideB !== sideA) {
  alert("ISOSCELES  TRAIANGLE");
}else if (sideA !== sideB && sideB !== sideC && sideA !== sideC && sideA + sideB > sideC && sideB + sideC > sideA){
  alert("SCALENE TRIANGLE");
}else if (sideA + sideB <= sideC) {
  alert ("NOT A TRIANGLE");
}else if (sideA + sideC <=sideB) {
  alert ("NOT A TRIANGLE");
}else if (sideB + sideC <=sideA)  {
  alert ("NOT A TRIANGLE");
}
}
