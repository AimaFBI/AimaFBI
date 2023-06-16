let secondhand = document.querySelector('.second-hand')
let minhand = document.querySelector('.min-hand')
let hourhand = document.querySelector('.hour-hand')

function setDate() {
    let now = new Date()
    const offset = 90
    const seconds = now.getSeconds()
    const secondsDegrees = ((360 / 60) * seconds) + offset
    secondhand.style.transform = `rotate(${secondsDegrees}deg)`;

    const min = now.getMinutes()
    const minDegrees = ((360/60) * min) + offset
    minhand.style.transform = `rotate(${minDegrees}deg)`;

    const hour = now.getHours()
    const hourDegrees = ((360/12) * hour) + offset
    hourhand.style.transform = `rotate(${hourDegrees}deg)`
}
setInterval(setDate, 1000)