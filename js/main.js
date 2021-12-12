//global var
const strat = document.querySelector('.strat-zekr');
const stratbtn = document.querySelector('#startBtn');

const badge = document.querySelector('.badge')
// const badge2 = array.form(document.querySelector('.badge'))
const azkarBlock = Array.from(document.querySelectorAll('.azkar-block'));
const conter = document.querySelector('.counter');
const plus = document.getElementById('plus');
const redo = document.getElementById('redo');
const number = document.getElementById('num');
const sebha = document.querySelector('.sebha');
const massaa = document.querySelector('.massaa');
//start
strat.addEventListener('click', function () {
    this.remove();
})
//loop
azkarBlock.forEach(function (zakr) {

    zakr.addEventListener('click', function () {

        handelBadge();
    })

});
function handelBadge() {
    // let theInnnerText = parseInt(badge.textContent) - 1;
    // badge.textContent = theInnnerText;
    // if (theInnnerText === 0) {

    //     badge.classList.remove('bg-danger')
    //     badge.classList.add('bg-warning');
    //     badge.classList.add('text-dark');
    //     badge.classList.add('text-bold');
    //     e.classList.add('noClicking');
    console.log(1)
    // e.remove()
}

// }
//counter handler
plus.addEventListener('click', function () {
    num.textContent++;
    document.querySelector('#enter').play();

})
redo.addEventListener('click', function () {
    let val = num.textContent;
    val = num.textContent * 0;
    num.textContent = val;
    document.querySelector('#close').play();

});
//sebha show and hide
sebha.addEventListener('click', function () {
    conter.classList.toggle('counter-show');
    this.classList.toggle('sebha-margin')
})
//massa 
// massaa.addEventListener('click', function () {
//     document.body.style.backgroundImage = '../img/back.jpg';
// })
function AzkarMasaa() {
    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80')"
}
function AzkarSabah() {
    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80')"
}