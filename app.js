
const seatBtns = document.getElementsByClassName('seat-num')
for (const seatbtn of seatBtns) {
    seatbtn.addEventListener('click', function (e) {

        // set bg of clicked btn
        const bg = e.target.style.backgroundColor = '#2eb82e';
        const color = e.target.style.color = '#ffffff';

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

        // makeTotal

    })
}


// --Utility--

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
    const ticketPrice = getInnerValue('ticket-price')
    console.log(ticketPrice)
    seatPrice.innerText = getInnerValue('ticket-price');
    seatPriceContainer.appendChild(seatPrice)
}


function getInnerValue(id) {
    const elementString = document.getElementById(id).innerText;
    const value = parseInt(elementString)
    return value;
}

function setInnerValue(id, value) {
    const element = document.getElementById(id)
    element.innerText = value
}
