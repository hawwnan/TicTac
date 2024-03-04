const winningPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
let turnO = true;
let count = 0;
let boxes = document.querySelectorAll('.box')
let msg = document.querySelector('.msg')
let newBtn = document.querySelector('.new-btn')
let container = document.querySelector('.msg-container')
let reset = document.querySelector('.reset-btn')
let image = document.querySelector('.image')
let img = document.querySelector('.img')

const checkWinner = () => {
    for(let pattern of winningPatterns){
        let pos1 = boxes[pattern[0]].innerText
        let pos2 = boxes[pattern[1]].innerText
        let pos3 = boxes[pattern[2]].innerText
        
        if(pos1 !== '' && pos2 !== '' && pos3 !== ''){
            if(pos1 == pos2 && pos2 == pos3){
                disableBtn();
                showWinner(pos1)
            }
        }
    }
    
}
const disableBtn = () => {
    for(box of boxes) {
        box.disabled = true
    }
}

const enableBtn = () => {
    for(box of boxes){
        box.disabled = false;
    }
}

const showWinner = (winner) => {
    img.classList.remove('hidden')
    image.classList.add('hidden')
    msg.classList.remove('hidden')
    msg.innerText = `Congratulation to player ${winner} !!!`;
    container.classList.remove('hidden')
}

const newGame = () => {
    count = 0;
    turnO = true;
    for(box of boxes) {
        box.innerText = ''
    }
    enableBtn()
    container.classList.add('hidden')

}

const resetGame = () => {
    newGame();
}

boxes.forEach((box) => {
    box.addEventListener('click' , () => {
        if(turnO){
            box.innerText = 'O'
            box.classList.add('red')
            turnO = false
            box.disabled = true;
        } else {
            box.innerText = 'X'
            box.classList.add('black')
            turnO = true
            box.disabled = true
        }
        count += 1;
        if(count == 9){
            drawGame()
        }
        checkWinner();
    })
})

newBtn.addEventListener('click', () => {
    newGame()
})

reset.addEventListener('click', () => {
    console.log('in reset')
    resetGame();
})

const drawGame = () => {
    image.classList.remove('hidden')
    img.classList.add('hidden')
    msg.classList.add('hidden')
    container.classList.remove('hidden')
}