const subhanAllahDisplay = document.getElementById('subhanAllahDisplay');
const subhanAllahIncrimentBtn = document.getElementById('subhanAllahIncrimentBtn');
const subhanAllahDecrimentBtn = document.getElementById('subhanAllahDecrimentBtn');
let subhanAllahValue = 0;
subhanAllahIncrimentBtn.addEventListener('click', function(){
    if(subhanAllahValue === 33){
        return alert('Ok Boss ✔')
    }
    subhanAllahValue += 1;
    subhanAllahDisplay.innerText = subhanAllahValue;
})
subhanAllahDecrimentBtn.addEventListener('click', function(){
    if(subhanAllahValue === 0){
        return alert('Boss ❌')
    }
    subhanAllahValue -= 1;
    subhanAllahDisplay.innerText = subhanAllahValue;
})

const alhamdulillahDisplay = document.getElementById('alhamdulillahDisplay');
const alhamdulillahIncrimentBtn = document.getElementById('alhamdulillahIncrimentBtn');
const alhamdulillahDecrimentBtn = document.getElementById('alhamdulillahDecrimentBtn');
let alhamdulillahValue = 0;
alhamdulillahIncrimentBtn.addEventListener('click', function(){
    if(alhamdulillahValue === 33){
        return alert('Ok Boss ✔')
    }
    alhamdulillahValue += 1;
    alhamdulillahDisplay.innerText = alhamdulillahValue;
})
alhamdulillahDecrimentBtn.addEventListener('click', function(){
    if(alhamdulillahValue === 0){
        return alert('Boss ❌')
    }
    alhamdulillahValue -= 1;
    alhamdulillahDisplay.innerText = alhamdulillahValue;
})

const allahAkberDisplay = document.getElementById('allahAkberDisplay');
const allahAkberIncrimentBtn = document.getElementById('allahAkberIncrimentBtn');
const allahAkberDecrimentBtn = document.getElementById('allahAkberDecrimentBtn');
let allahAkberValue = 0;
allahAkberIncrimentBtn.addEventListener('click', function(){
    if(allahAkberValue === 33){
        return alert('Ok Boss ✔')
    }
    allahAkberValue += 1;
    allahAkberDisplay.innerText = allahAkberValue;
})
allahAkberDecrimentBtn.addEventListener('click', function(){
    if(allahAkberValue === 0){
        return alert('Boss ❌')
    }
    allahAkberValue-= 1;
    allahAkberDisplay.innerText = allahAkberValue;
})

const resetBtn = document.getElementById('resetBtn');
resetBtn.addEventListener('click', function(){
    subhanAllahDisplay.innerText = 0;
    alhamdulillahDisplay.innerText = 0;
    allahAkberDisplay.innerText = 0;
    subhanAllahValue = 0;
    alhamdulillahValue = 0;
    allahAkberValue = 0;
})
