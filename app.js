

// button selection part..........
const seatBtns = document.getElementsByClassName('seat-num')
for (const seatbtn of seatBtns) {
    seatbtn.addEventListener('click', function (e) {

        //stops the execution of a function
        if (getInnerValue('seat') === 4) {
            alert('You cannot select more than 4 tickets')
            return;
        }

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

        grandTotal('hello')

    })
}


function makeTotal(price) {
    const total = getInnerValue('total-price')
    const sum = total + price;
    setInnerValue('total-price', sum)
}

function grandTotal(coupon){
    const total = getInnerValue('total-price')
    if(coupon === 'NEW15'){
        setInnerValue('grand-total', 'jorimmana lagbe')
    }
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



// work with Next Button
const nextBtn = document.getElementById('next-btn')

document.getElementById('phone-num').addEventListener('keyup', function (event) {
    const inputValueLength = event.target.value.length;
    const seatNum = getInnerValue('seat')
    if (inputValueLength >= 6 && seatNum > 0) {
        nextBtn.removeAttribute('disabled')
    } else{
        nextBtn.setAttribute('disabled', true)
    }
})



function applyCoupon(){
    
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
