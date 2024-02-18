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
        const seatContainer = document.getElementById('selected-seat-container')

        const parentDiv = document.createElement('div')
        parentDiv.innerText = 'hello'
        const seatDiv = document.createElement('div')

        const seatClassDiv = document.createElement('div')
        seatClassDiv.innerText = 'Economoy'
        const seatPriceDiv = document.createElement('div')
        seatPriceDiv.innerText = 550;
        seatContainer.appendChild(parentDiv)
        // parentDiv.appendChild(seatDiv)
        // parentDiv.appendChild(seatClassDiv)
        // parentDiv.appendChild(seatPriceDiv)
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