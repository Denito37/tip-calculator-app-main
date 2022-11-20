//Variables
const btn = document.querySelector("#btn5");//first btn
const btn2 = document.querySelector("#btn10");//second btn
const btn3 = document.querySelector("#btn15");//third btn
const btn4 = document.querySelector("#btn25");//fourth btn
const btn5 = document.querySelector("#btn50");//fifth btn
const custom = document.getElementById('custom');//input
const errMsg = document.getElementById('err1');
const errMsgTwo = document.getElementById('err2');
const bill = document.getElementById('bill'); //input
const ppl = document.getElementById('ppl'); //input
const tip = document.getElementById('just-tip');//result 1
const total = document.getElementById('total'); // result 2
const reset = document.getElementById('reset');
let tipValue = 0;
//Events
bill.addEventListener('input', isZero);
ppl.addEventListener('input', isZero);
bill.addEventListener('change', totalCalc);
ppl.addEventListener('change', totalCalc);
reset.addEventListener('click', resetValues);
btn.addEventListener('click', () =>{
   btn.classList.toggle('changeClr')
   tipValue = 0.05;
})
btn2.addEventListener('click',() =>{
   btn2.classList.toggle('changeClr')
   tipValue = 0.10;
})
btn3.addEventListener('click',() =>{
   btn3.classList.toggle('changeClr')
   tipValue = 0.15;
})
btn4.addEventListener('click',() =>{
   btn4.classList.toggle('changeClr')
   tipValue = 0.25;
})
btn5.addEventListener('click',() =>{
   btn5.classList.toggle('changeClr')
   tipValue = 0.50;
})
//Functions
function isZero(){
   if(bill.value === '0' ){
      errMsg.innerHTML ="Can't be zero";
   }
   else{
      errMsg.innerHTML = "";
   }
   if(ppl.value === '0'){
      errMsgTwo.innerHTML ="Can't be zero";
   }
   else{
      errMsgTwo.innerHTML =""
   }
}
function totalCalc(){
   let cash = bill.value; 
   let person = ppl.value; 
   let totalPay = (cash/person);
   let tipCharge = ((custom.value)/100) || tipValue;
   let tipPP = totalPay * tipCharge
   let totalPP = parseFloat(tipPP) + parseFloat(totalPay)
   tip.innerHTML = "$" + tipPP.toFixed(2);
   total.innerHTML = "$" + totalPP.toFixed(2); 
   if(isNaN(totalPP) || totalPP == "Infinity"){ total.innerHTML ="$0.00";}
   if(isNaN(tipPP) || tipPP == "Infinity"){ tip.innerHTML ="$0.00";}
}
function resetValues(){
   bill.value = "";
   ppl.value = "";
   custom.value = "";
   total.innerHTML = "$0.00";
   tip.innerHTML = "$0.00";
}