

// button selection part..........
const seatBtns = document.getElementsByClassName('seat-num')
for (const seatbtn of seatBtns) {
    seatbtn.addEventListener('click', function (e) {

        // set bg of clicked btn
        e.target.style.backgroundColor = '#2eb82e';
        e.target.style.color = '#ffffff';
        e.target.disabled = true;

        // update seat quantity
        const seat = getInnerValue('seat')
        const updatedSeat = seat + 1;
        setInnerValue('seat', updatedSeat)
        // update total seat left
        const seatsLeft = getInnerValue('seats-left')
        const updatedSeatsLeft = seatsLeft - 1;
        setInnerValue('seats-left', updatedSeatsLeft)


        // send seat data to total container 
        const btnTxt = e.target.innerText;
        sendDataToSeatContainer(btnTxt)

        // make Total
        const ticketPrice = getInnerValue('ticket-price')
        makeTotal(ticketPrice)

        phoneNumberControl()
    })
}


// send Data To Seat Container
function sendDataToSeatContainer(text) {
    const seatNameContainer = document.getElementById('seat-name-container')
    const seatName = document.createElement('div')
    seatName.innerText = text;
    seatNameContainer.appendChild(seatName)

    // seat-class-container
    const seatClassContainer = document.getElementById('seat-class-container')
    const seatClass = document.createElement('div')
    seatClass.innerText = 'Economoy'
    seatClassContainer.appendChild(seatClass)
    // seat-price-container
    const seatPriceContainer = document.getElementById('seat-price-container')
    const seatPrice = document.createElement('div')
    seatPrice.innerText = getInnerValue('ticket-price');
    seatPriceContainer.appendChild(seatPrice)
}


//  make total function
function makeTotal(price) {
    const total = getInnerValue('total-price')
    const sum = total + price;
    setInnerValue('total-price', sum)
    grandTotal('hello')
}


// input data collect by apply button fron coupon input field:
function applyCouponButton() {
    const couponCode = applyCoupon()
    grandTotal(couponCode)
    // faltu kaj-
    if (couponCode !== 'NEW15' && couponCode !== 'Couple 20') {
        document.getElementById('wrong-coupon').innerText = '!Wrong coupon'
    } else {
        document.getElementById('wrong-coupon').innerText = '';
    }
}
// take data from input
function applyCoupon() {
    const coupon = document.getElementById('coupon').value;
    const applyCouponBtn = document.getElementById('apply-coupon-btn')
    if (coupon.length > 0) {
        applyCouponBtn.removeAttribute('disabled');
    }
    else {
        applyCouponBtn.setAttribute('disabled', true);
    }
    return coupon;
}

// ? work with coupon ---grand total----------
function grandTotal(parameter) {
    const total = getInnerValue('total-price')
    if (parameter === 'NEW15') {
        const grandTotal = total * 0.85;
        setInnerValue('grand-total', grandTotal)
    } else if (parameter === 'Couple 20') {
        const grandTotal = total * 0.80;
        setInnerValue('grand-total', grandTotal)
    } else {
        setInnerValue('grand-total', total)
    }
}

//  *****************************************************************************************
// work with Next Button
// const nextBtn = document.getElementById('next-btn')
// document.getElementById('phone-num').addEventListener('keyup', function (event) {
//     const inputValueLength = event.target.value.length;
//     const seatNum = getInnerValue('seat')
//     if (inputValueLength >= 4 && seatNum > 0) {
//         nextBtn.removeAttribute('disabled')
//     } else {
//         nextBtn.setAttribute('disabled', true)
//     }
// })

// work with Next Button
const nextBtn = document.getElementById('next-btn')
function phoneNumberControl() {
    const phoneNum = document.getElementById('phone-num').value;
    console.log(phoneNum.length)
    const seatNum = getInnerValue('seat')
    if (phoneNum.length >= 4 && seatNum > 0) {
        nextBtn.removeAttribute('disabled')
    } else {
        nextBtn.setAttribute('disabled', true)
    }
}







// --> Utility ------------------------------------>


function getInnerValue(id) {
    const elementString = document.getElementById(id).innerText;
    const value = parseInt(elementString)
    return value;
}

function setInnerValue(id, value) {
    const element = document.getElementById(id)
    element.innerText = value
}
