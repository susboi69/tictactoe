// HTML Element variables
const cell = document.querySelectorAll(".cell");
const announcer = document.querySelector(".announcer")
const button = document.querySelector ("button")
let cellArray = [null, null, null,
    null, null, null,
    null, null, null]
const winningArray = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
let boi = []
let tictacArray = []
let XTurn = true;

cell.forEach((element, index) => {
    element.addEventListener("click", e => {
        let currentClass = XTurn == true ? "X" : "O"
        let sussyPlayer = XTurn == true ? "O" : "X"
        announcer.innerText = `Player ${sussyPlayer}'s turn!`
        element.classList.add(currentClass)
        cellArray[index] = currentClass
        winCheck()
        XTurn = !XTurn
      
   
      

    })
})

function winCheck() {
    for (i = 0; i < winningArray.length; i++) {
        const condition = winningArray[i]
        const cellA = cellArray[condition[0]]
        const cellB = cellArray[condition[1]]
        const cellC = cellArray[condition[2]]
        if (cellA == null || cellB == null || cellC == null) {
            continue
        }
        else if (cellA == cellB && cellB == cellC) {
            announcer.innerText = `Player ${cellA} wins`
            cell.forEach(element => {
            element.style.pointerEvents = "none"
            button.style.display = "block"
            })
            break
        }
        else if (!cellArray.includes(null)) {
            announcer.innerText = "Draw!"
            button.style.display = "block"
            break
        }
    }
}

function restart() {
    cellArray = [null, null, null,
        null, null, null,
        null, null, null]
        announcer.innerText = "Player X's turn"
        cell.forEach(element => {
        element.classList.remove("X")
        element.classList.remove("O")
        element.style.pointerEvents = ""
        button.style.display = "none"
    });
}

