let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

let currentPlayer = 'X';

function playMove(row, col) {
    if (board[row][col] === '') {
        board[row][col] = currentPlayer;
        document.getElementById(`cell-${row}-${col}`).innerText = currentPlayer;
        if (checkWin()) {
            document.getElementById('message').innerText = `${currentPlayer} a câștigat!`;
        } else if (checkDraw()) {
            document.getElementById('message').innerText = 'Remiză!';
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkWin() {
    for (let i = 0; i < 3; ++i) {
        if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] !== '') {
            return true;
        }
        if (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i] !== '') {
            return true;
        }
    }
    if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== '') {
        return true;
    }
    if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] !== '') {
        return true;
    }
    return false;
}

function checkDraw() {
    for (let row = 0; row < 3; ++row) {
        for (let col = 0; col < 3; ++col) {
            if (board[row][col] === '') {
                return false;
            }
        }
    }

    return !checkWin();
}

function resetGame() {
    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    currentPlayer = 'X';
    document.querySelectorAll('.cell').forEach(cell => cell.innerText = '');
    document.getElementById('message').innerText = '';
}
