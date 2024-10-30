alert("Find Your Percentage!");

var num1 = Number( prompt("Enter Total Or Maximum Number !"));
var num2 = Number( prompt("Enter Obtained Or Minimum Number !"));
var num3 = prompt("Enter The Sign Of Percentage");
var result;

if(num3 === "%" ){
    result = num2 / num1 * 100 +"%" ;
}
if(result){
    console.log("Your Percentage Is :" + " " ,result);
}else{
    console.log("No result found ! ");
}

alert(result)