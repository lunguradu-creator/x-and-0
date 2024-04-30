   document.addEventListener('DOMContentLoaded', function() {
        const boardElement = document.getElementById('board');
    for (let row = 0; row < 3; ++row) {
            for (let col = 0; col < 3; ++col) {
                const cell = document.createElement('div');
    cell.className = 'cell';
    cell.id = `cell-${row}-${col}`;
    cell.onclick = function() {playMove(row, col); };
    boardElement.appendChild(cell);
            }
        }
    });
