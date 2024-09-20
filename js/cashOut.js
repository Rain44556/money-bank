
// -----------------beginner-----------------

// document.getElementById('btn-cashOut').addEventListener('click', function(event){
// event.preventDefault();

// const cashOutAmount = document.getElementById('cash-out-money-amount').value;
// let cashOutAmountInNumber = parseFloat(cashOutAmount);
// const cashOutPinNum = document.getElementById('cash-out-money-pin').value;

// if(cashOutPinNum === '12344'){
//    const balanceAmount = document.getElementById('account-balance').innerText;
//    let balanceAmountInNumber = parseFloat(balanceAmount);

//    //now final balance after cash out
//    let updateBalanceAmount = balanceAmountInNumber - cashOutAmountInNumber;
//    console.log(updateBalanceAmount);

//    //for UI
//    document.getElementById('account-balance').innerText = updateBalanceAmount;
// }else
//     alert('Failed to cash out. please try again.');
// })




// --------For not repeating the code:--------(smart way to call function)
document.getElementById('btn-cashOut').addEventListener('click', function (event) {
    event.preventDefault();
    const cashOutMoney = getInputFieldValueById('cash-out-money-amount');
    const cashOutPinNum = getInputFieldValueById('cash-out-money-pin');


    if(isNaN(cashOutMoney)){
        alert("Failed to withdraw money");
        return;
    }

    if (cashOutPinNum === 12345) {
        const mainBalance = getTextFieldValueById('account-balance');
        if(mainBalance < cashOutMoney){
            alert("You do not have the enough money to withdraw");
            return;
        }

        let updateCashOutBalance = mainBalance - cashOutMoney;
        document.getElementById('account-balance').innerText = updateCashOutBalance;

        //transaction history
        const div = document.createElement('div');
        div.classList.add('bg-green-100');
        div.innerHTML = `
        <h3 class="text-2xl font-bold">Cash out</h3>
        <p>${cashOutMoney} withdraw. Update Balance: ${updateCashOutBalance}</p>
        `
        document.getElementById('transaction-container').appendChild(div);
    }
    else {
        alert("cash out can not be proceed");
    }
})