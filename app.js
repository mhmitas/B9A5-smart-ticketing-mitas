const seatBtns = document.getElementsByClassName('seat-num')
for (const seatbtn of seatBtns) {
    seatbtn.addEventListener('click', function (e) {
        
        // set bg of clicked btn
        const bg = e.target.style.backgroundColor = '#2eb82e'
        const color = e.target.style.color = '#ffffff'

        const seat = getInnerValue('seat')
        const updatedSeat = seat + 1;
        setInnerValue('seat',updatedSeat)

        const seatsLeft = getInnerValue('seats-left')
        const updatedSeatsLeft = seatsLeft - 1;
        setInnerValue('seats-left', updatedSeatsLeft)
        console.log(updatedSeatsLeft)
    })
}


// --Utility--

function getInnerValue(id) {
    const elementString = document.getElementById(id).innerText;
    const value = parseInt(elementString)
    return value;
}

function setInnerValue(id, value){
    const element = document.getElementById(id)
    element.innerText = value
}