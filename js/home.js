//add money to the account

//ste-1-- Add an event handler to the add money btn 
document.getElementById('btn-addMoney').addEventListener('click',function(event){

    //prevent page reload after form submit
    event.preventDefault();

//step-2-- get money to be added to the account
const addMoney = document.getElementById('added-money').value;
console.log(addMoney);

//get the pin number provided
const addedMoneyPin = document.getElementById('added-money-pin').value;
console.log(addedMoneyPin);

//step-3 verify the pin number(a wrong way)
    if(addedMoneyPin === '12344'){
    console.log('adding money in account');

    //step4-- get the current balance
    const accountBalance = document.getElementById('account-balance').innerText;
    console.log(accountBalance);

    //step-5--- add addMoney with balanceMoney
    const addMoneyNum = parseInt(addMoney);
    const balanceMoneyNum = parseFloat(accountBalance);
    let updateBalance = balanceMoneyNum + addMoneyNum;
    console.log(updateBalance);

    //step-6--- update the balance in UI/DOM
    document.getElementById('account-balance').innerText = updateBalance;

}else{
    alert("Failed to added Money! please try again");
}
});