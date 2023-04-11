let rast = document.getElementById('rast')
let time = document.getElementById('time')
let vyv = document.getElementById('vyv')
let ok = document.getElementById('ok')

function f1(){
    let rast1 = rast.value
    let time1 = time.value
    let score = rast1/time1
    vyv.innerHTML = 'Рекомендуемая средняя скорость: ' + score.toFixed(1)

}
ok.onclick = f1

//////////////////////////////////////////////////////////////////////////////

let money = document.getElementById('money')
let zena = document.getElementById('zen')
let raschet = document.getElementById('sch')
let itogo = document.getElementById('it')
let itogo2 = document.getElementById('it2')

function f2(){
    let mon = money.value
    let ch1 = zena.value
    let kolvo1 = Math.floor(mon/ch1)
    let kolvo2 = mon-kolvo1*ch1
    itogo.innerHTML = 'Ты можешь купить ' + kolvo1 + ' шт шоколада'
    itogo2.innerHTML = 'Твоя сдача: ' + kolvo2 + ' руб'
}
raschet.onclick = f2

/////////////////////////////////////////////////////////////////////////////

let vvod = document.getElementById('vv')
let perevod = document.getElementById('per')
let euro = document.getElementById('euro')

function f3(){
    const koeff = 0.92
    let vvod1 = vvod.value
    let euro1 = vvod1*koeff
    euro.innerHTML = 'У вас ' + euro1.toFixed(2) +' евро'
}
perevod.onclick = f3