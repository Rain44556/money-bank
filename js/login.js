// console.log("button clicking file added")

// document.getElementById('btn-login')
// .addEventListener('click', function(){})-----1st-step

// form submit reloading the page---(search-task)


// setp1---set event handler
document.getElementById('btn-login')
    .addEventListener('click', function (event) {
        console.log('login btn click');

        // step-2(set prevent defalut)
        event.preventDefault(); // browser j reload hoi setak se protirodh kore

        //step-3 get phoneNum and pinNum
        const phoneNum = document.getElementById('phn-num').value;
        const pinNum = document.getElementById('pin-num').value;
        console.log(phoneNum, pinNum);

        //step-4 validate phone and pin
        // this not ideal step!
        if (phoneNum === '5' && pinNum === "12344") {
            console.log('you are logged in');
            window.location.href = './home.html';  //if onno page jaite chai login er por
        } else {
            alert("wrong phone number or pin");
        }

        //step-5 allow user to use the website(not-good-way)
    })


