const dateOfBirth = document.querySelector ("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");


const outputBox = document.querySelector("#output-box");

function compareValues(sum,luckyNumber)
{
   if (sum%luckyNumber===0){
   outputBox.innerText=("Your Birthday is lucky 🤩💫")
   }else{
       outputBox.innerText=("Your Birthday is not lucky but if you feel you are a 😇lucky person then you are lucky.")
   }
}

 function checkBirthDateIsLucky(){
    const dte = dateOfBirth.value;
    const sum = calculateSum(dte);
    if(sum&&dte){
        compareValues(sum,luckyNumber.value)
    }else{
        outputBox.innerText="Please fill both the blanks🙁 ";
 }
 }

 function calculateSum(dte) {
dte = dte.replaceAll("-", "");
let sum = 0;
for(let index=0; index<dte.length; index++){
    sum += Number(dte.charAt(index));
}
return sum;
 }

 checkNumberButton.addEventListener('click',checkBirthDateIsLucky)
 