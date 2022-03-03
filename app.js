const rpsItem = document.querySelectorAll('.rps-items');
const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')
const triangle = document.querySelector('.bg-triangle')
const rpsImg = document.querySelector('.rps-img');
const rpsContainer = document.querySelector('.rps-container')
const chosen = document.querySelector('.chosen-el')
const picked = document.querySelector(".picked");
const btnCont = document.createElement('div');
const playBtn = document.createElement('button');
const outputText = document.createElement('h1');
const comp = document.createElement('div');
const h1 = document.createElement('h1');
const gameScore = document.getElementById("score")
let output;
let score = 12;

const choices = ['rock', 'paper', 'scissors'];
const random = Math.floor(Math.random() * choices.length);


const PlayerPick = () => {
    rpsItem.forEach(item => {
        item.addEventListener('click', () => {
            setTimeout(() => {
                midCont()
                item.style.marginTop = "0px";
                computerPicked();

                h1.classList = "you";
                h1.textContent = "YOU PICKED"
                item.appendChild(h1);
            }, 1000);

            item.classList.add('chosen-el');
            if (item.classList.contains('paper')) {
                scissors.remove()
                triangle.remove()
                rock.remove()
                item.style.pointerEvents = 'none'
                item.style.position = "unset"
            }
            if (item.classList.contains('rock')) {
                scissors.remove()
                triangle.remove()
                paper.remove();
                rock.style.pointerEvents = 'none'
                item.style.position = "unset"
            }
            if (item.classList.contains('scissors')) {
                paper.remove()
                triangle.remove()
                rock.remove()
                scissors.style.pointerEvents = 'none'
                item.style.position = "unset"
            }
        })
    })
}
PlayerPick()
const midCont = () => {
    btnCont.classList = "btn-cont";
    playBtn.classList = 'play-btn';
    playBtn.textContent = "Play Again";
    btnCont.appendChild(playBtn);
    rpsContainer.appendChild(btnCont);
}
const computerPicked = () => {

    comp.classList = `rps-items ${choices[random]} compEL`
    comp.innerHTML = `<img class="rps-img" src="/images/icon-${choices[random]}.svg" alt="${choices[random]}">`;
    comp.style.pointerEvents = "none";
    comp.style.position = "unset";
    rpsContainer.classList.add('game-board')
    rpsContainer.appendChild(comp);
    const h1 = document.createElement('h1');
    h1.classList = "you";
    h1.textContent = "THE HOUSE PICKED"
    comp.appendChild(h1);
}
const compute = () => {
    rpsItem.forEach(item => {
        item.addEventListener('click', () => {
            if (choices[random] === "rock" && item.classList.contains("rock")) {
                output = "draw"
            } else if (choices[random] === "rock" && item.classList.contains("paper")) {
                output = "win"
            } else if (choices[random] === "rock" && item.classList.contains("scissors")) {
                output = "lose"
            } else if (choices[random] === "paper" && item.classList.contains("paper")) {
                output = "draw"
            } else if (choices[random] === "paper" && item.classList.contains("rock")) {
                output = "lose"
            } else if (choices[random] === "paper" && item.classList.contains("scissors")) {
                output = "win"
            } else if (choices[random] === "scissors" && item.classList.contains("scissors")) {
                output = "draw"
            } else if (choices[random] === "scissors" && item.classList.contains("paper")) {
                output = "lose"
            } else if (choices[random] === "scissors" && item.classList.contains("rock")) {
                output = "win"
            } else return;
            results()
        })

    })

}
compute()

const results = () => {
    if (output === "win") {
        outputText.textContent = "YOU WIN"
        score++
    } else if (output === "lose") {
        outputText.textContent = "YOU LOSE"
        score--;
    } else {
        outputText.textContent = "DRAW"
    }
    btnCont.appendChild(outputText)
    setTimeout(() => {
        gameScore.textContent = score;
    }, 1000);
}
playBtn.addEventListener('click', () => {
    btnCont.remove()
    comp.remove()
    rpsContainer.classList.remove("game-board");

    rpsItem.forEach(item => {
        item.classList.remove("chosen-el")
        h1.remove()
        item.remove()
        item.style.position = null
        item.style.pointerEvents = null;
        item.style.marginTop = null
            // item.style.top = 0;
            // item.style.left = 0;
    });
    rpsContainer.appendChild(triangle);
    rpsContainer.appendChild(paper);
    rpsContainer.appendChild(scissors);
    rpsContainer.appendChild(rock);

})