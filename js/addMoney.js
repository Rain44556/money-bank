/**
 * 1st work- form er obosshoi kaj button dia start hbe. like down to up kaj krte hbe!
 * 
 * 1.add event listener to the add money button(form submit)
 *      ofcourse need to make sure to preventDefault so that page doesn't reloads
 *
 * 2.get the money user wants to add, also pinNum provided
 * 3.verify the pinNum. for wrong pinNim failed to add
 *                         for right pinNum allow to add the num to the account
 * 4.get the current balance 
 * 5.add money to be added with the current balance
 * 6.display/update the balance in the DOM/UI
 */



//  --------------for beginner----


// document.getElementById('btn-addMoney').addEventListener('click',function(event){
//     event.preventDefault();
//     var amountMoney = document.getElementById('added-money').value;
//     var amountMoneyInNum = parseFloat(amountMoney);
//     var amountMoneyPinNum = document.getElementById('added-money-pin').value;

//     if(amountMoneyPinNum === '12345'){
//        const balanceMoney = document.getElementById('account-balance').innerText;
//         const balanceAmountNum = parseFloat(balanceMoney);
//         const totalBalance = balanceAmountNum + amountMoneyInNum;

//         document.getElementById('account-balance').innerText = totalBalance;
//         console.log(totalBalance);
//     }else{
//         alert("please enter correct pin number or amount");
//     }
// })





// --------For not repeating the code:--------