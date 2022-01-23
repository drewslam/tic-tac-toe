const box = document.querySelectorAll('.box');

const gameButtons = function () {
    for (let i = 0; i < box.length; i++) {
        box[i].addEventListener('click', console.log(`${box[i].getAttribute('data-index')}`))
    }
}

gameButtons();