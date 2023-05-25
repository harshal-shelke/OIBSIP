let celInput = document.querySelector('#celcius > input')
let faraInput = document.querySelector('#fahrenheit > input')
let kelInput = document.querySelector('#kelvin > input')

let btn= document.querySelector('.button button')

function roundNumber(number){
    return Math.round(number*100)/100
}

celInput.addEventListener('input',function(){
    let ctemp = parseFloat(celInput.value)
    let ftemp = (ctemp*(9/5))+32
    let ktemp= ctemp+273.15

    faraInput.value=roundNumber(ftemp)
    kelInput.value= roundNumber(ktemp)
})


faraInput.addEventListener('input',function(){
    let ftemp = parseFloat(faraInput.value)
    let ctemp = (ftemp-32)*(5/9)
    let ktemp= (ftemp-32)*(5/9) +273.15

    celInput.value=roundNumber(ctemp)
    kelInput.value= roundNumber(ktemp)
})


kelInput.addEventListener('input',function(){
    let ktemp = parseFloat(kelInput.value)
    let ctemp = ktemp - 273.15
    let ftemp= (ktemp -273.15) *(9/5) +32

    celInput.value=roundNumber(ctemp)
    faraInput.value= roundNumber(ftemp)
})


btn.addEventListener('click', ()=>{
    celInput.value=""
    faraInput.value=""
    kelInput.value=""
})
