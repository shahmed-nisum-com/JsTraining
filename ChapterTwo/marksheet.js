var mark1=60;
var mark2=70;
var mark3=80;
var mark4=90;
var mark5=50;

var average=((mark1+mark2+mark3+mark4+mark5)/500)*100;
console.log(average);

switch (average) {
    case 90:
        console.log("4.00")
        break;
    case 80:
        console.log("3.00")
        break;
    case 70:
        console.log("2.67");
        break;
    case 60:
        console.log("2.33")
        break;
    case 50:
        console.log("2.00");
        break;
    case 40:
        console.log("Fail")
    default:
        console.log("You have invalid value")
        break;
}