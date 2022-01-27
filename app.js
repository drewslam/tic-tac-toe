const gameButtons = function () {
    const box = document.querySelectorAll('.box');

    const gamePlay = function () {
        if (this.innerHTML === '') {
            console.log('slam')
        }
    }
    
    for (let i = 0; i < box.length; i++) {
        box[i].addEventListener('click', gamePlay)
    }
}

gameButtons();