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
    let theInnnerText = parseInt(badge.textContent) - 1;
    badge.textContent = theInnnerText;
    if (theInnnerText === 0) {

        badge.classList.remove('bg-danger')
        badge.classList.add('bg-warning');
        badge.classList.add('text-dark');
        badge.classList.add('text-bold');
        e.classList.add('noClicking');

        // e.remove()
    }

}
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