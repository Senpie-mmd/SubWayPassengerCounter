const increaseBtn = document.querySelector("#increase-btn")
const totalPassengerCount = document.querySelector("#total-passenger-count")
const decreaseBtn = document.querySelector("#decrease-btn")
const addtoTotal = document.querySelector("#addto-total")
const totalEntry = document.querySelector("#total-entry")
let counter = 0
let totalPassengers = []
let sum = 0


increaseBtn.addEventListener("click", function () {
    counter += 1
    totalPassengerCount.textContent = counter
})

decreaseBtn.addEventListener("click", function () {
    counter -= 1
    totalPassengerCount.textContent = counter
})

addtoTotal.addEventListener("click", function () {
    totalPassengers.push(counter)
    counter = 0
    for (let i = 0; i < totalPassengers.length; i++) {
        sum += totalPassengers[i]
    }
    totalEntry.textContent = "Entry: " + sum
    sum = 0
    totalPassengerCount.textContent = 0
})