//global var
const strat = document.querySelector('.strat-zekr');
const stratbtn = document.querySelector('#startBtn');
const btnCount = document.getElementsByClassName('btn-count');
const spanNum = document.getElementsByClassName('btn-number');
const conter = document.querySelector('.counter');
const plus = document.getElementById('plus');
const redo = document.getElementById('redo');
const number = document.getElementById('num');
const sebha = document.querySelector('.sebha');
const massaa = document.querySelector('.massaa');
const azkarBlocks = document.querySelectorAll('.card')
//start
strat.addEventListener('click', function () {
    this.remove();
})
//click the btn to count 
let countBtn = () => {
    for (let i = 0; i < btnCount.length; i++) {
        let btnCountt = btnCount[i];
        btnCountt.addEventListener('click', function (e) {
            let btnClicked = e.target;
            console.log(btnClicked)
            // if (parseInt(btnClicked.lastElementChild.textContent) == parseInt(btnClicked.lastChild.value)) {
            //     alert(1)
            //     let val = parseInt(btnClicked.lastElementChild.textContent);
            //     val++;
            //     btnClicked.lastElementChild.textContent = val;


            // }

        })

    }
}
// azkarBlock.map(function (zakr, i) {
//     badge.map(function (bad, j) {
//         zakr.addEventListener('click', function () {

//             handelBadge(bad[0], zakr[0]);



//         })


//     })



// });

// function handelBadge(badge, container) {
//     let theInnnerText = parseInt(badge.textContent) - 1;
//     badge.textContent = theInnnerText;
//     if (badge.dataset.count === container.dataset.count && theInnnerText === 0) {

//         badge.classList.remove('bg-danger')
//         badge.classList.add('bg-warning');
//         badge.classList.add('text-dark');
//         badge.classList.add('text-bold');
//         container.classList.add('noClicking');
//         container.lastChild

//         // container.remove()
//     }
//     console.log(1)
// }
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

function AzkarMasaa() {
    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1626348448069-9b156d20faeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80')"
}
function AzkarSabah() {
    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1471922694854-ff1b63b20054?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80')"
}
function sleeping() {
    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80')"
}
function wakeUp() {
    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1628692945421-21162c93a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')"
}
//scrollbar

SimpleScrollbar.initAll();
// https://images.unsplash.com/photo-1541697030313-c55aac74fbae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80
//************************************************************** */
// const badge = document.querySelector('.badge')
// const badge = Array.from(document.querySelectorAll('.badge'))
// const azkarBlock = Array.from(document.querySelectorAll('.azkar-block'));
// const azkarBlocks = document.getElementsByClassName('card');