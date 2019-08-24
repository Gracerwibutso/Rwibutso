// variable that represent array
var firstwork = []; 

//to call the input in java script
var firstcall= document.getElementById("inputy");
function firstMove()

//to push value of input in array
   
{
    firstwork.push(firstcall.value); 
if(firstcall.value == ""){
    alert("Please write something");
}
else{


    var output = "Here is your list now" + "<br>";
for (i = 0; i < firstwork.length; i++) { //when u click the length changed
output = output + "<input type='checkbox'>" + firstwork[i] + "<br>";
}
document.getElementById("LU").innerHTML = output;
}
}
 



// /**
//  * Adds two integers
//  * 
//  * @param {integer} num1 
//  * @param {integer} num2 
//  * 
//  * @return {integer}
//  */
// function sum(num1, num2) {
//     return num1 + num2;
// }

// console.log(sum(6, 7));

