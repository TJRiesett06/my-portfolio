/*
let lapsCompleted = 0

// Create a function that increments the lapsCompleted variable with one
// Run it three times
function laps() {
    lapsCompleted = lapsCompleted + 1
}

laps()
laps()
laps()
console.log(lapsCompleted)
*/

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    count = 0
    countEl.textContent = count
}