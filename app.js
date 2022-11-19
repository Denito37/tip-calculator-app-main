//Variables
const btns = document.querySelector(".tipbtn")[0];//first btn
const btns2 = document.querySelector(".tipbtn")[1];//second btn
const btns3 = document.querySelector(".tipbtn")[2];//third btn
const btns4 = document.querySelector(".tipbtn")[3];//fourth btn
const btns5 = document.querySelector(".tipbtn")[4];//fifth btn
const custom = document.getElementById('custom');//input
const errMsg = document.getElementById('err1');
const errMsgTwo = document.getElementById('err2');
const bill = document.getElementById('bill'); //input
const ppl = document.getElementById('ppl'); //input
const tip = document.getElementById('just-tip');//result 1
const total = document.getElementById('total'); // result 2
const reset = document.getElementById('reset');
//Events
bill.addEventListener('input', isZero);
ppl.addEventListener('input', isZero);
bill.addEventListener('change', totalCalc);
ppl.addEventListener('change', totalCalc);
reset.addEventListener('click', resetValues);
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
   let tipCharge = ((custom.value)/100);
   let tipPP = totalPay * tipCharge
   let TotalPP = parseFloat(tipPP) + parseFloat(totalPay)
   tip.innerHTML = "$" + tipPP.toFixed(2);
   total.innerHTML = "$" + TotalPP.toFixed(2); 
}
function resetValues(){
   bill.value = "";
   ppl.value = "";
   custom.value = "";
   total.innerHTML = "$0.00";
   tip.innerHTML = "$0.00";
}