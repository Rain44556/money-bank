document.getElementById('btn-cashOut').addEventListener('click', function(event){
event.preventDefault();

const cashOutAmount = document.getElementById('cash-out-money-amount').value;
let cashOutAmountInNumber = parseFloat(cashOutAmount);
const cashOutPinNum = document.getElementById('cash-out-money-pin').value;

if(cashOutPinNum === '12344'){
   const balanceAmount = document.getElementById('account-balance').innerText;
   let balanceAmountInNumber = parseFloat(balanceAmount);

   //now final balance after cash out
   let updateBalanceAmount = balanceAmountInNumber - cashOutAmountInNumber;
   console.log(updateBalanceAmount);

   //for UI
   document.getElementById('account-balance').innerText = updateBalanceAmount;
}else
    alert('Failed to cash out. please try again.');
})