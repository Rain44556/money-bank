
//-----------------------beginner---------------------

// //show the cash out form
// document.getElementById('btn-cash-out-user').addEventListener('click',function(){
//    document.getElementById('cash-out-form').classList.remove('hidden');
//    //hide the add money form
//    document.getElementById('added-money-form').classList.add('hidden');
   
   
// //show add money form
// document.getElementById('btn-add-money-user').addEventListener('click',function(){
//     document.getElementById('added-money-form').classList.remove('hidden');
//     //hide cash-out-form
//     document.getElementById('cash-out-form').classList.add('hidden');
// })
// })



// --------For not repeating the code:--------(smart way to call function)

document.getElementById('btn-add-money-user').addEventListener('click',function(){
    displayFormById('added-money-form');
});

document.getElementById('btn-cash-out-user').addEventListener('click',function(){
    displayFormById('cash-out-form');
});

document.getElementById('btn-transaction-list').addEventListener('click',function(){
    displayFormById('transaction-section');
})