let cells = document.querySelectorAll('.row div');
let CurrentPlayer = 'X';
let moveCount = 0;
let gameOver = false;

cells.forEach(function (cell) {
    cell.addEventListener('click', cellClicked);
});

console.log(cells);

/* above forEach is shorthand for below.
for(let i =0; i < cells.length; i++) {
    cells[i].addEventListener("click", cellClicked);
}; */

function cellClicked() {
    console.log(event.target);
    if (gameOver) {
        console.log('End Game');
        cells.forEach(function (cell) {
            cell.textContent = '';
        })
        document.querySelector('#results').textContent = '';
        moveCount = 0;
        CurrentPlayer = 'X';
        gameOver = false;
        return;
    }
    /* checks to make sure cell is not empty */
    if (event.target.textContent !== "") {
        return;
    }
    event.target.textContent = CurrentPlayer;
    moveCount++;
    checkWinLoseOrDraw(); /* this invokes a function within a function of a function */
    togglePlayer(); /* this nests a function inside of a function */
};

function checkWinLoseOrDraw() {
    if (checkTop() || checkMiddle() || checkBottom() || checkVertical1() || checkVertical2() || checkVertical3() || checkDiagonalLeft() || checkDiagonalRight()) {
        console.log('We have a winner!');
        document.querySelector('#results').textContent = CurrentPlayer + 'Winner!';
        gameOver = true;
    } else if (moveCount >= 9) {
        document.querySelector('#results').textContent = 'It\'s a draw!';
        console.log('We have a draw!');
        gameOver = true;
    }
}

function checkTop() {
    if (cells[0].textContent === cells[1].textContent && cells[2].textContent === cells[0].textContent && !isEmpty(0, 1, 2)) {
        return true;
    }
}

function checkMiddle() {
    if (cells[3].textContent === cells[4].textContent && cells[5].textContent === cells[3].textContent && !isEmpty(3, 4, 5)) {
        return true;
    }
}

function checkBottom() {
    if (cells[6].textContent === cells[7].textContent && cells[8].textContent === cells[6].textContent && !isEmpty(6, 7, 8)) {
        return true;
    }
}

function checkVertical1() {
    if (cells[0].textContent === cells[3].textContent && cells[6].textContent === cells[0].textContent && !isEmpty(0, 3, 6)) {
        return true;
    }
}

function checkVertical2() {
    if (cells[1].textContent === cells[4].textContent && cells[7].textContent === cells[1].textContent && !isEmpty(1, 4, 7)) {
        return true;
    }
}

function checkVertical3() {
    if (cells[2].textContent === cells[5].textContent && cells[8].textContent === cells[2].textContent && !isEmpty(2, 5, 8)) {
        return true;
    }
}

function checkDiagonalLeft() {
    if (cells[0].textContent === cells[4].textContent && cells[8].textContent === cells[0].textContent && !isEmpty(0, 4, 8)) {
        return true;
    }
}

function checkDiagonalRight() {
    if (cells[2].textContent === cells[4].textContent && cells[6].textContent === cells[2].textContent && !isEmpty(2, 4, 6)) {
        return true;
    }
}

function isEmpty(a, b, c) {
    if (cells[a].textContent === "" || cells[b].textContent === "" || cells[c].textContent === "") {
        return true;
    }
}

function togglePlayer() {
    if (CurrentPlayer === 'X') {
        CurrentPlayer = 'O';
    } else {
        CurrentPlayer = 'X';
    }
}