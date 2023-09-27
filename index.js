let homeCount = 0
let guestCount = 0
let resetCount = 0
document.getElementById("reset").textContent = resetCount
document.getElementById("home-counter").textContent = homeCount 
document.getElementById("guest-counter").textContent = guestCount

let add = 0
console.log(add)

function add1() {
    homeCount += 1
    document.getElementById("home-counter").textContent = homeCount; 
}

function add2() {
    homeCount += 2
    document.getElementById("home-counter").textContent = homeCount; 
}

function add3() {
    homeCount += 3
    document.getElementById("home-counter").textContent = homeCount; 
}

function addone() {
    guestCount += 1
    document.getElementById("guest-counter").textContent = guestCount; 
}

function addtwo() {
    guestCount += 2
    document.getElementById("guest-counter").textContent = guestCount; 
}

function addthree() {
    guestCount += 3
    document.getElementById("guest-counter").textContent = guestCount; 
}

function reset() {
document.getElementById("home-counter").textContent = resetCount
document.getElementById("guest-counter").textContent = resetCount

}