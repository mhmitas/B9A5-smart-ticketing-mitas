
const ticketPrice = 500;

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
        sendDataToSeatContainer()
    })
}


// --Utility--

function getInnerValue(id) {
    const elementString = document.getElementById(id).innerText;
    const value = parseInt(elementString)
    return value;
}

function setInnerValue(id, value) {
    const element = document.getElementById(id)
    element.innerText = value
}

function sendDataToSeatContainer() {
    const seatNameContainer = document.getElementById('seat-name-container')
    // const seatDiv = document.createElement('div')
    const seatClassContainer = document.getElementById('seat-class-container')
    const seatClass = document.createElement('div')
    seatClass.innerText = 'Economoy'
    seatClassContainer.appendChild(seatClass)

    const seatPriceContainer = document.getElementById('seat-price-container')
    const seatPrice = document.createElement('div')
    seatPrice.innerText = ticketPrice;
    seatPriceContainer.appendChild(seatPrice)
    // console.log()
}