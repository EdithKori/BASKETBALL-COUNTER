let scoreH = document.getElementById("scorehome");
let count = 0;

function increasehome(){
    count += 3
    scoreH.textContent = count
}

function decreasehome(){
    count -= 1
    scoreH.textContent = count
}

function resethome(){
    count = 0
    scoreH.textContent = count
}

let scoreA = document.getElementById("scoreaway");
let countA = 0;
function increaseaway(){
    countA += 3
    scoreA.textContent = countA
}

function decreaseaway(){
    countA -= 1
    scoreA.textContent = countA
}

function resetaway(){
    countA = 0
    scoreA.textContent = countA
}